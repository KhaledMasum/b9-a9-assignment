import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-dots loading-lg"></span></div>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;