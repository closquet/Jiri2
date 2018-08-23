import Testc from '../components/views/common/testc/Testc';

const commonRoutes = [
    {
        path: '/testc',
        component: Testc
    }
];


import Testa from '../components/views/admin/testa/Testa';
import AdminHome from '../components/views/admin/adminHome/AdminHome';

const adminRoutes = [
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/testa',
        component: Testa
    }
];


import Testg from '../components/views/guest/testg/Testg';
import GuestHome from '../components/views/guest/guestHome/GuestHome';


const guestRoutes = [
    {
        path: '/home',
            component: GuestHome
    },
    {
        path: '/testg',
            component: Testg
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