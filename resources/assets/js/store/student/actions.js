import * as api from './api';
import store from "../index";

const actions = {
    storeAllStudents: ({commit}) => {
        api.getAllStudents( students => {
            commit('STORE_ALL_STUDENTS', students);
        });
    },

    storeStudentToUpdate: ({commit}, student) => {
        commit('STORE_STUDENT_TO_UPDATE', student);
    },

    clearStudentToUpdate: ({commit}) => {
        commit('CLEAR_STUDENT_TO_UPDATE');
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

    updateStudent: ({commit}, student) => {
        store.dispatch('global/editFormStatus','loading');
        api.updateStudent( student,  (status) => {
            if(status === 200){
                commit('UPDATE_STUDENT', student);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Update student error: ' + status);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

    addStudent: ({commit}, student) => {
        store.dispatch('global/editFormStatus','loading');
        api.addStudent( student,  (response) => {
            if(response.status === 200){
                commit('STORE_STUDENT_TO_UPDATE', response.data);
                commit('ADD_STUDENT', response.data);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Add student error: ' + response);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

    addStudentProject:({commit}, project) => {
        store.dispatch('global/editFormStatus','loading');
        api.addStudentProject( project,  (response) => {
            if(response.status === 200){
                commit('STORE_STUDENT_PROJECT', response.data);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Add studentProject error: ' + response);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

    updateStudentProject:({commit}, project) => {
        store.dispatch('global/editFormStatus','loading');
        api.updateStudentProject( project,  (response) => {
            if(response.status === 200){
                commit('UPDATE_STUDENT_PROJECT', response.data);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Update studentProject error: ' + response);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },
};

export default actions;