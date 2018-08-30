import * as api from './api'

const actions = {
    editFormStatus: ({commit}, string) => {
        commit('EDIT_FORM_STATUS', string);
    },
};

export default actions;