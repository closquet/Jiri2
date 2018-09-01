import * as api from './api'

const actions = {
    editFormStatus: ({commit}, string) => {
        commit('EDIT_FORM_STATUS', string);
    },
    checkFormStatusRepeater:(store, [successClosure, errorClosure]) => {
        let counter = 0;
        let checkFormStatusRepeaterId = setInterval(()=>{
            counter++;
            if(store.state.formStatus === 'success'){
                clearInterval(checkFormStatusRepeaterId);
                successClosure();
            }else if(store.state.formStatus === 'error' || counter === 10){
                clearInterval(checkFormStatusRepeaterId);
                errorClosure();
            }
        }, 1000);
    },
};

export default actions;