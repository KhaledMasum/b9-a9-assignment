import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../../pages/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet className="max-w-6xl mx-auto"></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;