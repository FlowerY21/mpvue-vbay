import Vue from  'vue'
import App from './app'
import api from './utils/api' // 引用接口处理文件，此处为api.js
import md5 from 'js-md5'
let base64 = require('js-base64').Base64
Vue.prototype.$api = api



Vue.prototype.$md5 = md5
Vue.prototype.$base64 = base64

//  设置vue的提示功能关闭
Vue.config.productionTip = false

//  声明当前组件的类型
App.mpType = 'app' //  应用

//  生成应用的实例
const app = new Vue(App)

//  挂载整个应用
app.$mount()
