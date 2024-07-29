import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const { DocumentTitle } = useContext(AuthContext);
    DocumentTitle("Update Profile");
    return (
        <div>
            <h2>Update Profile</h2>
        </div>
    );
};

export default UpdateProfile;