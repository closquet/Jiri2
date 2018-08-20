require('./bootstrap');

import Vue from 'vue'
import Root from './Root.vue';

const app = new Vue({
    el: '#app',
    render: h => h(Root)
});
