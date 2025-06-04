import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

// Import global CSS if you have one, or App.vue handles scoped/global styles
// import './assets/main.css'

const app = createApp(App)

app.use(router) // Use the router

app.mount('#app')
