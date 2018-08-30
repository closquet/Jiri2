import * as api from './api'

const actions = {
    addUser: (store, userToAdd) => {
        const response = api.addUser(userToAdd);
        if(response){
            store.commit('ADD_USER',userToAdd);
        }
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
    },
    },
    },
    updateUser: (store, newUserContent) => {
        const response = api.updateUser(newUserContent);
        if(response){
            store.commit('UPDATE_USER', newUserContent);
        }
    }
};

export default actions;