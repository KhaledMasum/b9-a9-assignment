import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
        </div>
    );
};

export default Root;