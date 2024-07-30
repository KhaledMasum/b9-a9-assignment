import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { user, UpdateUserProfile, DocumentTitle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [name, setName] = useState(user.displayName);
    const [photo, setPhoto] = useState(user.photoURL);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handlePhotoChange = (event) => {
        setPhoto(event.target.value);
    };

    DocumentTitle("Update Profile");

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photo_url.value;

        UpdateUserProfile(name, photoUrl)
            .then(() => {
                toast.success("User Updated Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
                navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            });
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-80 shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h2 className="text-2xl font-semibold text-center">Update Profile</h2>
                            <div className="form-control">
                                <label className="label py-0">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" onChange={handleNameChange} className="input input-bordered" value={name} name="name" />
                            </div>
                            <div className="form-control">
                                <label className="label py-0">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" onChange={handlePhotoChange} className="input input-bordered" value={photo} name="photo_url" />
                            </div>
                            <div className="form-control">
                                <label className="label py-0">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" name="email" value={user.email} readOnly />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;