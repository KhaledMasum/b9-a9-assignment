import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { signInWithEmail, googleLogin, githubLogin } = useContext(AuthContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signInWithEmail(email, password)
            .then(() => {
                toast("User Logged In!", {
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
    };

    const googleSignIn = () => {
        googleLogin()
            .then(() => {
                toast("User Logged In!", {
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
            }).catch((error) => {
                toast.error(error, {
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

    const githubSignIn = () => {
        githubLogin()
            .then(() => {
                toast("User Logged In!", {
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
            }).catch((error) => {
                toast.error(error, {
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
                    <form className="card-body pb-0" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-2xl font-semibold text-center">Please Log In</h2>
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
                            <input type="password" placeholder="Password" className="input input-bordered" name="password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            <label className="label">
                                <p className="label-text-alt text-sm">No account yet? <span className="text-blue-600"><Link to="/register">Please Register</Link></span></p>
                            </label>
                        </div>
                        <div className="form-control mb-2">
                            <button className="btn btn-primary">Log In</button>
                        </div>
                    </form>
                    <div className="card-body pt-0">
                        <div className="form-control space-y-2">
                            <button className="btn btn-outline" onClick={googleSignIn}><FaGoogle className="me-1 text-lg" /> Log in with Google</button>
                            <button className="btn btn-outline" onClick={githubSignIn}><FaGithub className="me-1 text-lg" /> Log in with Github</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;