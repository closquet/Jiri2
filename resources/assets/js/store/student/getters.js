const getters = {

    getAllStudents: state => state.students,
    getAllB2Students: state => state.students.filter(student => student.bloc === 2),
    getAllB3Students: state => state.students.filter(student => student.bloc === 3),

    getAvailableStudents: state => state.students.filter(student => student.is_available),
    getAvailableB2: state => state.students.filter(student => student.bloc === 2 && student.is_available),
    getAvailableB3: state => state.students.filter(student => student.bloc === 3 && student.is_available),

    getUnavailableStudents: state => state.students.filter(student => !student.is_available),
    getUnavailableB2: state => state.students.filter(student => student.bloc === 2 && !student.is_available),
    getUnavailableB3: state => state.students.filter(student => student.bloc === 3 && !student.is_available),

    getStudentFromId: state => studentId => state.students.find(student => student.id === studentId),

    getStudentProjectFromId: state => (studentId, projectId) => {
        const studentProjects = state.students.find(student => student.id === studentId).projects;
        return studentProjects.find(project => project.pivot.id === projectId) ;
    },
};

export default getters;