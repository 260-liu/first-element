import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import DaUI from '../packages'
Vue.config.productionTip = false
Vue.use(DaUI)
Vue.use(ElementUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
