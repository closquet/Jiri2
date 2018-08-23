require('./bootstrap');

import Vue from 'vue';


import store from './store'

import AdminRoot from './components/views/admin/AdminRoot.vue';
import GuestRoot from './components/views/guest/GuestRoot.vue';

const app = new Vue({
    store,
    components:{
        AdminRoot,
        GuestRoot,
    },
    el: '#app',
});
