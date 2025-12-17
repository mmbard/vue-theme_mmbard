const App = {
  data() {
    return {
      title: "Список заметок",
      placeholderString: "Введите название заметки",
      inputValue: "",
      notes: ["Заметка 1", "Заметка 2"],
    };
  },
  methods: {
    // inputChangeHandler(event) {
    //   //console.log('inputChangeHandler', event.target.value)
    //   this.inputValue = event.target.value;
    // }, // без v-model
    addNewNote() {
      if (this.inputValue === '') {
        return
      }
      this.notes.push(this.inputValue)
      this.inputValue = ''
    },
    toUpperCase(item) {
      return item.toUpperCase
    },
    removeNote(i) {
      this.notes.splice(i, 1)
    },
  },
  computed: {
    doubleCountComputed() {
      //console.log('doubleCountCounted')
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 20) {
        this.inputValue = ''
      }
      //console.log('input Value', value);
    }
  }
};

const app = Vue.createApp(App);

app.mount("#app");
