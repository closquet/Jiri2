require('./bootstrap');

import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

import AdminRoot from './components/AdminRoot.vue';
import GuestRoot from './components/GuestRoot.vue';

const app = new Vue({
    components:{
        AdminRoot,
        GuestRoot,
    },
    el: '#app',
});
