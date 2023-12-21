// styles
// import './assets/main.css'
// import './assets/vendors/core/core.css'
// import './assets/vendors/flatpickr/flatpickr.min.css'
// import './assets/fonts/feather-font/css/iconfont.css';
import './assets/vendors/flag-icon-css/css/flag-icon.min.css'
// import './assets/css/demo2/style.css'
// Get all .css files from the assets/css directory
const cssFiles = import.meta.glob('./assets/css/demo2/*.css');
// Import each CSS file dynamically
Object.keys(cssFiles).forEach((key) => cssFiles[key]());


// // scripts
// import './assets/vendors/core/core.js'
// import './assets/vendors/flatpickr/flatpickr.min.js'
// import './assets/vendors/apexcharts/apexcharts.min.js'
import './assets/vendors/feather-icons/feather.min.js'
// import './assets/js/template.js'
// import './assets/js/dashboard-dark.js'


import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// bootsrap(css/js)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
