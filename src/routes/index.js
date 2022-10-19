import Home from '../pages/Home/Home';
import Detail from '../pages/Detail/Detail';
import Pdf from '../pages/Pdf/Pdf';
const routes = [{
        key: 1,
        path: "/",
        exact: true,
        isPrivate: false,
        component: Home,
    },
    {
        key: 2,
        path: "/detail/:id",
        exact: true,
        isPrivate: false,
        component: Detail,
    },
    {
        key: 3,
        path: "/pdf/:id",
        exact: true,
        isPrivate: false,
        component: Pdf,
    },
]

export default routes;