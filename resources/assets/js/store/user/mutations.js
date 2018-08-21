const mutations = {
    ADD_USER: (state, userToAdd) => {
        state.users.push(userToAdd);
    },
    STORE_CURRENT_USER: (state, currentUser) => {
        state.currentUser = currentUser;
    },
    STORE_ALL_USERS: (state, users) => {
        state.users = users;
    },
    DISABLE_USER: (state, userId) => {
        state.users.filter(user => user.id === userId)[0].available = 0
    },
    ENABLE_USER: (state, userId) => {
        state.users.filter(user => user.id === userId)[0].available = 1
    },
    UPDATE_USER: (state, newUserContent) => {
        state.users.filter(user => user.id === newUserContent.id)[0] = newUserContent;
    }
};
export default mutations;