
const commonRoutes = [
];


import AdminHome from '../components/views/admin/adminHome/AdminHome';

import UsersList from '../components/views/admin/users/UsersList';
import UserEdit from '../components/views/admin/users/UserEdit';
import AddUser from '../components/views/admin/users/AddUser';
import AllUsersList from '../components/views/admin/users/parts/AllUsersList';
import AllTeachersList from '../components/views/admin/users/parts/AllTeachersList';
import AllGuestsList from '../components/views/admin/users/parts/AllGuestsList';

import StudentsList from '../components/views/admin/students/StudentsList';
import StudentEdit from '../components/views/admin/students/StudentEdit';
import AddStudent from '../components/views/admin/students/AddStudent';
import AllStudentsList from '../components/views/admin/students/parts/AllStudentsList';
import AllB2StudentsList from '../components/views/admin/students/parts/AllB2StudentsList';
import AllB3StudentsList from '../components/views/admin/students/parts/AllB3StudentsList';

import ProjectsList from '../components/views/admin/projects/ProjectsList';
import ProjectEdit from '../components/views/admin/projects/ProjectEdit';
import AddProject from '../components/views/admin/projects/AddProject';
import AllProjectsList from '../components/views/admin/projects/parts/AllProjectsList';
import AllB2ProjectsList from '../components/views/admin/projects/parts/AllB2ProjectsList';
import AllB3ProjectsList from '../components/views/admin/projects/parts/AllB3ProjectsList';

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

    {
        path: '/etudiants',
        component: StudentsList,
        children: [
            {
                path: '',
                component: AllStudentsList
            },
            {
                path: 'bloc2',
                component: AllB2StudentsList
            },
            {
                path: 'bloc3',
                component: AllB3StudentsList
            },
        ]
    },
    {
        path: '/etudiants/:studentId/modifier',
        component: StudentEdit
    },
    {
        path: '/etudiants/ajouter',
        component: AddStudent
    },
    {
        path: '/projets',
        component: ProjectsList,
        children: [
            {
                path: '',
                component: AllProjectsList
            },
            {
                path: 'bloc2',
                component: AllB2ProjectsList
            },
            {
                path: 'bloc3',
                component: AllB3ProjectsList
            },
        ]
    },
    {
        path: '/projets/:projectId/modifier',
        component: ProjectEdit
    },
    {
        path: '/projets/ajouter',
        component: AddProject
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