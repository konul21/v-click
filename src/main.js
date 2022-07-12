import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { createApp } from 'vue'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const app = createApp(App)
app.use(VueSweetalert2);

createApp(App).mount('#app')

app.directive('klik',{
    created(el,bind){
        el.addEventListener(bind.value, ()=>{
            
        })
    }
})
