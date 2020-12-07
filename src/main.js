import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
//tailwind css
import "./assets/tailwind.css"

createApp(App)
  .use(router)
  .mount("#app")
