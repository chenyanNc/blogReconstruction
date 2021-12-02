// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'iview/dist/styles/iview.css'
import 'swiper/swiper-bundle.css'
import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview'

import axios from 'axios'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import store from './store'

// 引入动画效果(通过安装 wowjs 而得到的 animate.css)
import 'wowjs/css/libs/animate.css'


// 引入mockjs
import './utils/mock/mock.js'


Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(iView)



new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})