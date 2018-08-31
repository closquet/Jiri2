import * as api from './api';
import store from "../index";

const actions = {
    storeAllStudents: ({commit}) => {
        api.getAllStudents( students => {
            commit('STORE_ALL_STUDENTS', students);
        });
    },

    disableStudent: ({commit}, studentId) => {
        api.disableStudent( studentId,  (status) => {
            if(status === 200){
                commit('DISABLE_STUDENT', studentId);
            }else{
                console.log('Error: ' + status);
            }
        });
    },


    enableStudent: ({commit}, studentId) => {
        api.enableStudent( studentId,  (status) => {
            if(status === 200){
                commit('ENABLE_STUDENT', studentId);
            }else{
                console.log('Error: ' + status);
            }
        });
    },

    updateStudent: ({commit}, studentContent) => {
        store.dispatch('global/editFormStatus','loading');
        api.updateStudent( studentContent,  (status) => {
            if(status === 200){
                commit('UPDATE_STUDENT', studentContent);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Update student error: ' + status);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

    addStudent: ({commit}, studentContent) => {
        store.dispatch('global/editFormStatus','loading');
        api.addStudent( studentContent,  (status) => {
            if(status === 200){
                commit('ADD_STUDENT', studentContent);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Add student error: ' + status);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

};

export default actions;