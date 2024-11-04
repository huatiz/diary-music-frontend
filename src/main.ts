import '@/assets/css/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import App from './App.vue'
import router from './router'
import i18n from './i18n'

const app = createApp(App)
const pinia = createPinia()

defineRule('required', required)

configure({
  generateMessage: localize({ zh_TW: zhTW })
})

setLocale('zh_TW')

app.use(pinia)
app.use(router)
app.use(i18n)

app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
