import api from './api'

const getters = {

    getAllUsers: state => state.users,
    getAllAdminUsers: state => state.users.filter(user => user.isAdmin),
    getAllGuestUsers: state => state.users.filter(user => !user.isAdmin),
    getAvailableUsers: state => state.users.filter(user => user.isAvailable),
    getCurrentUser: state => state.currentUser,
};

export default getters;