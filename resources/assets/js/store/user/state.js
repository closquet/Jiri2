const state = {
    users:[
        {
            id:'',
            name:'',
            category:'1', //1 = teacher, 2 = guest
            email:'',
            phone:'',
            isAdmin:'0',
            isAvailable:'0'
        },
    ],
    currentUser:{
        id:'',
        name:'',
        category:'1', //1 = teacher, 2 = guest
        email:'',
        phone:'',
        isAdmin:'0',
        isAvailable:'0'
    },
    // students:[],
    // projectsTypes:[],
    // studentsProjects:[]
    // studentsProjectsScores:[]
};

export default state;