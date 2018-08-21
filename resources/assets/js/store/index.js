import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import user from './user'

export default new Vuex.Store({
    modules: {
        user,
        // student
    },
    strict: true
})