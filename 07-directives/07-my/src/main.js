import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from './translatePlugin'

const app = createApp(App)

const ru = {
    app: {
        title: 'Плагины',
        changeBtn: 'Переключить язык'
    }
}
const en = {
    app: {
        title: 'Plugins',
        changeBtn: 'Switch language'
    }
}

app.use(translatePlugin, {ru, en})

app
    // .directive('focus', {
    //     mounted(element) {
    //         element.focus()
    //     }
    // })
    .mount('#app')
