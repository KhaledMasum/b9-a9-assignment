import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { createUserWithEmail, DocumentTitle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [password, setPassword] = useState(null);
    const [passwordType, setPasswordType] = useState('password');

    DocumentTitle("Register");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleIconToggle = () => {
        if (passwordType == 'password') {
            setPasswordType('text')
            return;
        }
        setPasswordType('password');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (data) => {
        console.log(data);
        const { email, password } = data;
        createUserWithEmail(email, password)
            .then(() => {
                navigate('/');
                toast.success("User Registered Successfully!", {
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
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-80 shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Please Register</h2>
                        <div className="form-control">
                            <label className="label py-0">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name" {...register("name")} />
                        </div>
                        <div className="form-control">
                            <label className="label py-0">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" className="input input-bordered" name="photo_url" {...register("photoUrl")} />
                        </div>
                        <div className="form-control">
                            <label className="label py-0">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Email" className="input input-bordered" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label py-0">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type={passwordType} onChange={handlePasswordChange} value={password} placeholder="Password" className="input input-bordered w-full" name="password" {...register("password", { required: true, minLength: 6 })} />
                                {
                                    passwordType == 'password' ? <FaRegEyeSlash className="absolute top-4 right-3" onClick={handleIconToggle} /> : <FaRegEye className="absolute top-4 right-3" onClick={handleIconToggle} />
                                }
                            </div>
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            <label className="label py-0">
                                <p className="label-text-alt text-sm">Already have an account? <span className="text-blue-600"><Link to="/login">Please Log In</Link></span></p>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;