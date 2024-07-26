import Root from '../layouts/Root/Root';
import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import UpdateProfile from '../pages/UpdateProfile';
import UserProfile from '../pages/UserProfile';
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/update_profile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/user_profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
]);

export default router;