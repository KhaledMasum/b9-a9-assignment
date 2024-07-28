import { Outlet } from "react-router-dom";
import Navbar from "../../pages/Navbar";
import { ToastContainer } from "react-toastify";
import Footer from "../../pages/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ToastContainer />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;