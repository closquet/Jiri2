import api from './api'

const getters = {

    getAllUsers: (state) => {
        return state.users
    },
    getAllAdminUsers: state => state.users.filter(user => user.isAdmin),
};

export default getters;