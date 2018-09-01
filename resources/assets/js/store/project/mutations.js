const mutations = {
    STORE_ALL_PROJECTS: (state, projects) => {
        state.projects = projects;
    },

    UPDATE_PROJECT: (state, newProjectContent) => {
        state.projects.find(project => project.id === newProjectContent.id).name = newProjectContent.name;
        state.projects.find(project => project.id === newProjectContent.id).description = newProjectContent.description;
        state.projects.find(project => project.id === newProjectContent.id).bloc = newProjectContent.bloc;
    },

    ADD_PROJECT: (state, {id, name, description, bloc}) => {
        state.projects.push({id, name, description, bloc});
    },

};
export default mutations;