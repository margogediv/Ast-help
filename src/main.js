import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './css/app.scss'
// require('vue2-animate/dist/vue2-animate.min.css')

//HighchartsVue
import HighchartsVue from 'highcharts-vue'
Vue.config.productionTip = false
Vue.use(HighchartsVue)

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
