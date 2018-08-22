import * as api from './api'

const actions = {
    addUser: (store, userToAdd) => {
        const response = api.addUser(userToAdd);
        if(response){
            store.commit('ADD_USER',userToAdd);
        }
    },
    storeCurrentUser: (store, currentUser) => {
        store.commit('STORE_CURRENT_USER', currentUser);
    },
    storeAllUsers: (store) => {
        const users = api.getAllUsers();
        if(users){
            store.commit('STORE_ALL_USERS', users);
        }
    },
    disableUser: (store, userId) => {
        const response = api.disableUser(userId);
        if(response){
            store.commit('DISABLE_USER', userId);
        }
    },
    enableUser: (store, userId) => {
        const response = api.enableUser(userId);
        if(response){
            store.commit('ENABLE_USER', userId);
        }
    },
    updateUser: (store, newUserContent) => {
        const response = api.updateUser(newUserContent);
        if(response){
            store.commit('UPDATE_USER', newUserContent);
        }
    }
};

export default actions;