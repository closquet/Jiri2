//if logged and is admin
export const getAllUsers = () => {
    return [
        {
            id: '0',
            name:'John Doe',
            category:'2', //1 = teacher, 2 = guest
            email:'john@mail.be',
            phone:'+32495000001',
            isAdmin:0,
            isAvailable:0
        },
        {
            id: '1',
            name:'Dominique Vilain',
            category:'1', //1 = teacher, 2 = guest
            email:'exemple@mail.be',
            phone:'+32495000002',
            isAdmin:1,
            isAvailable:1
        },
        {
            id: '2',
            name:'Myriam Dupont',
            category:'1', //1 = teacher, 2 = guest
            email:'myriam@mail.be',
            phone:'+32495000003',
            isAdmin:1,
            isAvailable:1
        },
        {
            id: '3',
            name:'Billy Dumant',
            category:'1', //1 = teacher, 2 = guest
            email:'Billy@mail.be',
            phone:'+32495000004',
            isAdmin:1,
            isAvailable:0
        },
        {
            id: '4',
            name:'Sophie Palak',
            category:'1', //1 = teacher, 2 = guest
            email:'Sophie@mail.be',
            phone:'+32495000005',
            isAdmin:0,
            isAvailable:0
        },
        {
            id: '5',
            name:'Marine Lavoie',
            category:'1', //1 = teacher, 2 = guest
            email:'Marine@mail.be',
            phone:'+32495000006',
            isAdmin:0,
            isAvailable:1
        }
    ];
};

//if logged
export const getCurrentUser = () => {
    return {
        id: '3',
        name:'Billy Dumant',
        email:'myriam@mail.be',
        phone:'+32495000003',
        category:'1', //1 = teacher, 2 = guest
        isAdmin:1,
        isAvailable:1
    };
};

//if logged and is admin
export const addUser = (userToAdd) => {
    return true;
};

//if logged and is admin
export const disableUser = (userId) => {
    return true;
};

//if logged and is admin
export const enableUser = (userId) => {
    return true;
};

//if logged and is admin
export const updateUser = (newUserContent) => {
    return true;
};
