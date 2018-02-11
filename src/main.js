// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Select, Option, RadioGroup, Radio } from 'iview'
import App from './App.vue'
import routes from './routes.js'

Vue.use(VueRouter)
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);
Vue.config.productionTip = false

var router = new VueRouter({
    routes: routes
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})