import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://vue-stock-trader-c2d61-default-rtdb.firebaseio.com/'
        })
    }
})