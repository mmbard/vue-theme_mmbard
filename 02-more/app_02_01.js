const App = {
    data: () => ({
        myHtml:'<h1> Vue3 playing </h1>',
        title: 'Title',
        person: {
            firstName: 'Max',
            lastName: 'Ba',
            age: 20
        },
        items: [1, 2, 3, 4, 5]
    })
}


const app = Vue.createApp(App)

app.mount('#app')