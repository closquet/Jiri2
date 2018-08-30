import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import global from './global';
import user from './user';

export default new Vuex.Store({
    modules: {
        global,
        user,
        // student
    },
    strict: true
})