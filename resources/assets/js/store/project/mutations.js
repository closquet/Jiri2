const mutations = {
    STORE_ALL_PROJECTS: (state, projects) => {
        state.projects = projects;
    },

    UPDATE_PROJECT: (state, newProjectContent) => {
        const project = state.projects.find(project => project.id === newProjectContent.id);
        project.name = newProjectContent.name;
        project.description = newProjectContent.description;
        project.bloc = newProjectContent.bloc;
    },

    ADD_PROJECT: (state, {id, name, description, bloc}) => {
        state.projects.push({id, name, description, bloc});
    },

};
export default mutations;