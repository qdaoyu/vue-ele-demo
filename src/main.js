// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

//安装vuestic时提示的操作
// import { createApp } from 'vue'
// import { createVuestic } from 'vuestic-ui'
// import 'vuestic-ui/css'

// const app = createApp(App)
// app.use(createVuestic())
//---------------------

//安装ant-design时提示的操作
// import { createApp } from 'vue';
import Antd from 'ant-design-vue';
// import { DatePicker } from 'ant-design-vue';
import  'ant-design-vue/dist/antd.css';
// const app = createApp(App);
// app.use(Antd);
Vue.use(Antd)
// Vue.use(DatePicker);
// app.use(Antd).mount('#app');
//---------------------



Vue.use(ElementUI)
//全局配置
Vue.prototype.$axios = axios
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
