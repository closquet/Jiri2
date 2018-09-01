import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import global from './global';
import user from './user';
import student from './student';
import project from './project';

export default new Vuex.Store({
    modules: {
        global,
        user,
        student,
        project,
    },
    strict: true
})