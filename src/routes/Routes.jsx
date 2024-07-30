import Root from '../layouts/Root/Root';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import ErrorRoute from './ErrorRoute';
import EstateDetails from '../pages/EstateDetails';
import PrivateRoutes from './PrivateRoutes';
import UpdateProfile from '../pages/Authentication/UpdateProfile';
import AboutUs from '../pages/AboutUs';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorRoute></ErrorRoute>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/update_profile',
                element: <PrivateRoutes><UpdateProfile></UpdateProfile></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/estate/:id',
                element: <PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/about_us',
                element: <PrivateRoutes><AboutUs></AboutUs></PrivateRoutes>
            }
        ]
    },
]);

export default router;