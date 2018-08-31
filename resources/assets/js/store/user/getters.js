const getters = {

    getAllUsers: state => state.users,
    getAllUsersNoSupAdmin: state => state.users.filter(user => user.category !== 3),
    getAllTeacherUsers: state => state.users.filter(user => user.category === 1),
    getAllGuestUsers: state => state.users.filter(user => user.category === 2),

    getAvailableUsers: state => state.users.filter(user => user.is_available),
    getAvailableUsersNoSupAdmin: state => state.users.filter(user => user.is_available && user.category !== 3),
    getAvailableGuests: state => state.users.filter(user => user.category === 2 && user.is_available),
    getAvailableteachers: state => state.users.filter(user => user.category === 1 && user.is_available),

    getUnavailableUsers: state => state.users.filter(user => !user.is_available),
    getUnavailableGuests: state => state.users.filter(user => user.category === 2 && !user.is_available),
    getUnavailableteachers: state => state.users.filter(user => user.category === 1 && !user.is_available),

    getUserFromId: state => userId => state.users.find(user => user.id === userId),

    getCurrentUser: state => state.currentUser,
};

export default getters;