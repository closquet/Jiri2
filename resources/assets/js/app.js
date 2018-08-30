require('./bootstrap');

import Vue from 'vue';


import store from './store'

import AdminRoot from './components/views/admin/AdminRoot.vue';
import GuestRoot from './components/views/guest/GuestRoot.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faPlusCircle,
    faMinusCircle,
    faEdit,
    faThumbsUp,
    faThumbsDown,
    faSpinner
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faPlusCircle,
    faMinusCircle,
    faEdit,
    faThumbsUp,
    faThumbsDown,
    faSpinner
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

const app = new Vue({
    store,
    components:{
        AdminRoot,
        GuestRoot,
    },
    el: '#app',
});
