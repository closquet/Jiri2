const mutations = {
    STORE_CURRENT_USER: (state, currentUser) => { //used in routes.js
        state.currentUser = currentUser;
    },

    STORE_ALL_USERS: (state, users) => {
        state.users = users;
    },

    DISABLE_USER: (state, userId) => {
        state.users.find(user => user.id === userId).is_available = 0
    },

    ENABLE_USER: (state, userId) => {
        state.users.find(user => user.id === userId).is_available = 1
    },

    UPDATE_USER: (state, newUserContent) => {
        state.users.find(user => user.id === newUserContent.id).name = newUserContent.name;
        state.users.find(user => user.id === newUserContent.id).email = newUserContent.email;
        state.users.find(user => user.id === newUserContent.id).phone = newUserContent.phone;
        state.users.find(user => user.id === newUserContent.id).category = newUserContent.category;
        state.users.find(user => user.id === newUserContent.id).is_available = newUserContent.is_available;
        state.users.find(user => user.id === newUserContent.id).is_admin = newUserContent.is_admin;
    },

    ADD_USER: (state, {name, email, phone, category, isAvailable, isAdmin}) => {
        state.users.push({name, email, phone, category, isAvailable, isAdmin});
    },

};
export default mutations;