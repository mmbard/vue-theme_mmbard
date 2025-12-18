const h = Vue.h

const App = {
  // template: `
  // <div class="card center"> 
  //   <h1> This is template </h1>
  //   <button class="btn" @click="title = 'Изменили'"> {{ title }} </button>
  // </div>
  // `,
  data: () => ({
      title: "Титульник"
  }),
  methods: {
    changeTitle() {
      this.title ="Изменили"
    }
  },
  render() {
    return h('div',{
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'Изменить')
    ])
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  }
}

const App2 = {
  data: () => ({
    title: 'New title 2'
  })
}

// setTimeout(() => {
//   app.unmounted()
// }, 2000);


const app2 = Vue.createApp(App2)
const app = Vue.createApp(App)

app.mount("#app")
app2.mount("#app2")


//=====
// // let Title = 'vue3'
// // let message = 'Заголовок это:' + Title

// // console.log(message);

// // Title = 'Angular'

// // console.log(message);

// const data = {
//   title: 'Vue 3',
//   message: 'Заголовок это: ' + 'Vue'
// }
// console.log(data)

// const proxy = new Proxy(data, {
//   get(target) {
//     console.log(target);
//     console.log(p);
//   }
// })

// proxy.message