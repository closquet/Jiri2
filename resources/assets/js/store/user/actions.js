import * as api from './api'

const actions = {
    storeCurrentUser: ({commit}, currentUser) => {
        commit('STORE_CURRENT_USER', currentUser);
    },

    storeAllUsers: ({commit}) => {
        api.getAllUsers( users => {
            commit('STORE_ALL_USERS', users);
        });
    },

    disableUser: ({commit}, userId) => {
        api.disableUser( userId,  (status) => {
            if(status === 200){
                commit('DISABLE_USER', userId);
            }else{
                console.log('Error: ' + status);
            }
        });
    },


    enableUser: ({commit}, userId) => {
        api.enableUser( userId,  (status) => {
            if(status === 200){
                commit('ENABLE_USER', userId);
            }else{
                console.log('Error: ' + status);
            }
        });
    },

    updateUser: ({commit}, userContent) => {
        store.dispatch('user/editUserFormStatus','loading');
        api.updateUser( userContent,  (status) => {
            if(status === 200){
                commit('UPDATE_USER', userContent);
                store.dispatch('user/editUserFormStatus','success');
            }else{
                console.log('Error: ' + status);
                store.dispatch('user/editUserFormStatus','error');
            }
        });
    },
    },

    addUser: ({commit}, userContent) => {
        store.dispatch('user/editUserFormStatus','loading');
        api.addUser( userContent,  (status) => {
            if(status === 200){
                commit('ADD_USER', userContent);
                store.dispatch('user/editUserFormStatus','success');
            }else{
                console.log('Error: ' + status);
                store.dispatch('user/editUserFormStatus','error');
            }
        });
    },

};

export default actions;