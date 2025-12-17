const App = {
    data: () => ({
        myHtml:'<h1> Vue3 playing </h1>',
        title: 'Title',
        person: {
            firstName: 'Max',
            lastName: 'Ba',
            age: 20
        },
        items: [1, 2, 3, 4, 5, 6]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        anotherTestMethod() {
            console.log('This is another method!!! :>> ');
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}


const app = Vue.createApp(App)

app.mount('#app')