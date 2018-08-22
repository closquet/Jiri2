import AdminHome from '../adminHome/AdminHome';
import Testa from '../testa/Testa';
import commonRoutes from '../../common/navigation/routes'

const routes = [
    ...commonRoutes,
    {
        path: '/',
        component: AdminHome
    },
    {
        path: '/testa',
        component: Testa
    },
];

export default routes;