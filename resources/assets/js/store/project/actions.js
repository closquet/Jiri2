import * as api from './api';
import store from "../index";

const actions = {
    storeAllProjects: ({commit}) => {
        api.getAllProjects( projects => {
            commit('STORE_ALL_PROJECTS', projects);
        });
    },

    updateProject: ({commit}, projectContent) => {
        store.dispatch('global/editFormStatus','loading');
        api.updateProject( projectContent,  (status) => {
            if(status === 200){
                commit('UPDATE_PROJECT', projectContent);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Update project error: ' + status);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

    addProject: ({commit}, projectContent) => {
        store.dispatch('global/editFormStatus','loading');
        api.addProject( projectContent,  (response) => {
            if(response.status === 200){
                commit('ADD_PROJECT', response.data);
                store.dispatch('global/editFormStatus','success');
            }else{
                console.log('Action : Add project error: ' + response);
                store.dispatch('global/editFormStatus','error');
            }
        });
    },

};

export default actions;