import Vue from "vue";
import VueRouter from "vue-router";
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from "vuetify/lib";
import EmployeeList from "./server/components/EmployeeList.vue";
import EmployeeDetail from "./server/components/EmployeeDetail.vue";

import 'vuetify/dist/vuetify.css';

import Main from './Main.vue';


Vue.use(VueRouter);

const routes = [
    { path: '/', component: EmployeeList },
    { path: '/employee/:id', component: EmployeeDetail },
];

const router = new VueRouter({ routes });

Vue.use(Vuetify, { iconfont: 'mdi' });

new Vue({
    vuetify : new Vuetify,
    router  : router,
    render  : (h) => h(Main)
}).$mount('#app');