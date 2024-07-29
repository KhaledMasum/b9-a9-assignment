import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    return (
        <div>
            {
                user ? children : <Navigate to="/login" state={location?.pathname}></Navigate>
            }
        </div>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;