import GuestHome from '../guestHome/GuestHome';
import Testc from '../testc/Testc';
import commonRoutes from '../../common/navigation/routes'

const routes = [
    ...commonRoutes,
    {
        path: '/',
        component: GuestHome
    },
    {
        path: '/testc',
        component: Testc
    }
];

export default routes;