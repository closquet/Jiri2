const mutations = {
    STORE_ALL_STUDENTS: (state, students) => {
        state.students = students;
    },

    STORE_STUDENT_TO_UPDATE: (state, student) => {
        state.studentToUpdate = student;
    },

    CLEAR_STUDENT_TO_UPDATE: (state) => {
        state.studentToUpdate = null;
    },

    DISABLE_STUDENT: (state, studentId) => {
        state.students.find(student => student.id === studentId).is_available = 0
    },

    ENABLE_STUDENT: (state, studentId) => {
        state.students.find(student => student.id === studentId).is_available = 1
    },

    UPDATE_STUDENT: (state, newStudentContent) => {
        const student = state.students.find(student => student.id === newStudentContent.id);
        student.name = newStudentContent.name;
        student.email = newStudentContent.email;
        student.phone = newStudentContent.phone;
        student.bloc = newStudentContent.bloc;
        student.is_available = newStudentContent.is_available;
    },

    ADD_STUDENT: (state, student) => {
        state.students.push(student);
    },

    STORE_STUDENT_PROJECT: (state, project) => {
        const student = state.students.find(student => student.id === project.pivot.student_id);
        student.projects.push(project);
    },

    UPDATE_STUDENT_PROJECT: (state, project) => {
        const student = state.students.find(student => student.id === project.pivot.student_id);
        const projectToUpdate = student.projects.find(project => project.pivot.id === project.pivot.id);
        projectToUpdate.id = project.id;
        projectToUpdate.bloccreated_at = project.bloccreated_at;
        projectToUpdate.created_at = project.created_at;
        projectToUpdate.escription = project.escription;
        projectToUpdate.name = project.name;
        projectToUpdate.updated_at = project.updated_at;
        projectToUpdate.pivot.created_at = project.pivot.created_at;
        projectToUpdate.pivot.github_url = project.pivot.github_url;
        projectToUpdate.pivot.is_available = project.pivot.is_available;
        projectToUpdate.pivot.project_id = project.pivot.project_id;
        projectToUpdate.pivot.site_account = project.pivot.site_account;
        projectToUpdate.pivot.site_password = project.pivot.site_password;
        projectToUpdate.pivot.site_url = project.pivot.site_url;
        projectToUpdate.pivot.updated_at = project.pivot.updated_at;
    },

};
export default mutations;