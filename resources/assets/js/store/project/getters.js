const getters = {

    getAllProjects: state => state.projects,
    getAllB2Projects: state => state.projects.filter(project => project.bloc === 2),
    getAllB3Projects: state => state.projects.filter(project => project.bloc === 3),
    
    getProjectFromId: state => projectId => state.projects.find(project => project.id === projectId),
};

export default getters;