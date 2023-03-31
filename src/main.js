import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '/src/App.vue'
import router from '/src/router/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')
