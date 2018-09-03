const mutations = {
    STORE_CURRENT_USER: (state, currentUser) => { //used in routes.js
        state.currentUser = currentUser;
    },

    STORE_ALL_USERS: (state, users) => {
        state.users = users;
    },

    DISABLE_USER: (state, userId) => {
        state.users.find(user => user.id === userId).is_available = false
    },

    ENABLE_USER: (state, userId) => {
        state.users.find(user => user.id === userId).is_available = true
    },

    UPDATE_USER: (state, newUserContent) => {
        const user = state.users.find(user => user.id === newUserContent.id);
        user.name = newUserContent.name;
        user.email = newUserContent.email;
        user.phone = newUserContent.phone;
        user.category = newUserContent.category;
        user.is_available = newUserContent.is_available;
        user.is_admin = newUserContent.is_admin;
    },

    ADD_USER: (state, {id, name, email, phone, category, is_available, is_admin}) => {
        state.users.push({id, name, email, phone, category, is_available, is_admin});
    },

};
export default mutations;