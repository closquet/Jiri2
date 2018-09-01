const mutations = {
    STORE_ALL_STUDENTS: (state, students) => {
        state.students = students;
    },

    DISABLE_STUDENT: (state, studentId) => {
        state.students.find(student => student.id === studentId).is_available = 0
    },

    ENABLE_STUDENT: (state, studentId) => {
        state.students.find(student => student.id === studentId).is_available = 1
    },

    UPDATE_STUDENT: (state, newStudentContent) => {
        state.students.find(student => student.id === newStudentContent.id).name = newStudentContent.name;
        state.students.find(student => student.id === newStudentContent.id).email = newStudentContent.email;
        state.students.find(student => student.id === newStudentContent.id).phone = newStudentContent.phone;
        state.students.find(student => student.id === newStudentContent.id).bloc = newStudentContent.bloc;
        state.students.find(student => student.id === newStudentContent.id).is_available = newStudentContent.is_available;
    },

    ADD_STUDENT: (state, {id, name, email, phone, bloc, is_available}) => {
        state.students.push({id, name, email, phone, bloc, is_available});
    },

};
export default mutations;