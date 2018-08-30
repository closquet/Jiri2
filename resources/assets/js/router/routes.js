
const commonRoutes = [
];


import AdminHome from '../components/views/admin/adminHome/AdminHome';
import UsersList from '../components/views/admin/users/UsersList';
import UserEdit from '../components/views/admin/users/UserEdit';
import AddUser from '../components/views/admin/users/AddUser';
import AllUsersList from '../components/views/admin/users/parts/AllUsersList';
import AllTeachersList from '../components/views/admin/users/parts/AllTeachersList';
import AllGuestsList from '../components/views/admin/users/parts/AllGuestsList';

const adminRoutes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/utilisateurs',
        component: UsersList,
        children: [
            {
                path: '',
                component: AllUsersList
            },
            {
                path: 'professeurs',
                component: AllTeachersList
            },
            {
                path: 'guests',
                component: AllGuestsList
            },
        ]
    },
    {
        path: '/utilisateurs/:userId/modifier',
        component: UserEdit
    },
    {
        path: '/utilisateurs/ajouter',
        component: AddUser
    },
];


import GuestHome from '../components/views/guest/guestHome/GuestHome';


const guestRoutes = [
    {
        path: '/home',
            component: GuestHome
    },
];

import store from '../store'

let routes = [
    // ...commonRoutes,
    // ...adminRoutes,
    // ...guestRoutes,

];

if(window.currentuserfromserver){
    store.dispatch('user/storeCurrentUser',window.currentuserfromserver);
    const currentUser = store.getters["user/getCurrentUser"];
    const roleRoute = currentUser.is_admin === 1 ? adminRoutes : guestRoutes;
    routes = [
        ...commonRoutes,
        ...roleRoute,

    ];
}

export default routes;