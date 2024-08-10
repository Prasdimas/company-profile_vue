import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles' // Import styles
import '@mdi/font/css/materialdesignicons.css' // Import Material Design Icons
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)

// Set up Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// Use Vuetify and router
app.use(vuetify).use(router)

// Mount the app
app.mount('#app')