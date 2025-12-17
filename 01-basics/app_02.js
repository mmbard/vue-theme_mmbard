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
    inputChangeHandler(event) {
      //console.log('inputChangeHandler', event.target.value)
      this.inputValue = event.target.value;
    },
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
    }
  },
};

const app = Vue.createApp(App);

app.mount("#app");
