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
        path: '/',
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
        path: '/',
            component: GuestHome
    },
    {
        path: '/testg',
            component: Testg
    },

];

import store from '../store'
store.dispatch('user/storeCurrentUser',window.currentuserfromserver);
const currentUser = store.getters["user/getCurrentUser"];
const roleRoute = currentUser.is_admin === 1 ? adminRoutes : guestRoutes;

const routes = [
    ...commonRoutes,
    ...roleRoute,

];

console.log(currentUser);


export default routes;