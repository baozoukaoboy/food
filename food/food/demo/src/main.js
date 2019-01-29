// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui css
import'mint-ui/lib/style.css'
Vue.config.productionTip = false
//引入mui css
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import MintUI from "mint-ui";
Vue.use(MintUI)

//引入vue-resourse 发送AJAX
import VueResource from "vue-resource"
Vue.use(VueResource);
//vue-resourse服务器根目录
Vue.http.options.root = "http://127.0.0.1:3000/"

/* eslint-disable no-new */
new Vue({   
 el: '#app',
  router,
  components: { App },
  template: '<App/>'
})