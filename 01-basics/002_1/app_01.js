const App = {
    data() {
        return {
            counter: 2,
            title: 'Title'
        }
    }
}


const app = Vue.createApp(App)

app.mount('#app')