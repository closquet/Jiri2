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
        state.users.filter(user => user.id === userId)[0].isAvailable = 1
    },

    UPDATE_USER: (state, newUserContent) => {
        state.users.filter(user => user.id === newUserContent.id)[0] = newUserContent;
    }

    ADD_USER: (state, {name, email, phone, category, isAvailable, isAdmin}) => {
        state.users.push({name, email, phone, category, isAvailable, isAdmin});
    },

};
export default mutations;