//if logged and is admin
export const getAllUsers = () => {
    return [
        {
            id: 0,
            firstname:'John',
            lastname:'Doe',
            category:2, //1 = teacher, 2 = guest
            email:'john@mail.be',
            phone:'+32495000001',
            isAdmin:0,
            available:0
        },
        {
            id: 1,
            firstname:'Dominique',
            lastname:'Vilain',
            category:1, //1 = teacher, 2 = guest
            email:'exemple@mail.be',
            phone:'+32495000002',
            isAdmin:1,
            available:1
        },
        {
            id: 2,
            firstname:'Myriam',
            lastname:'Dupont',
            category:1, //1 = teacher, 2 = guest
            email:'myriam@mail.be',
            phone:'+32495000003',
            isAdmin:1,
            available:1
        },
        {
            id: 3,
            firstname:'Billy',
            lastname:'Dumant',
            category:1, //1 = teacher, 2 = guest
            email:'Billy@mail.be',
            phone:'+32495000004',
            isAdmin:1,
            available:1
        }
    ];
};

//if logged
export const getCurrentUser = () => {
    return {
        id: 3,
        firstname:'Billy',
        lastname:'Dumant',
        email:'myriam@mail.be',
        phone:'+32495000003',
        category:1, //1 = teacher, 2 = guest
        isAdmin:1,
        available:1
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
