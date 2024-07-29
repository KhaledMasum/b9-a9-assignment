import { useContext } from "react";
import Banner from "./Banner";
import Estates from "./Estates";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const Home = () => {
    const { DocumentTitle } = useContext(AuthContext);
    DocumentTitle("Skyline Residences");
    return (
        <div>
            <Banner></Banner>
            <Estates></Estates>
        </div>
    );
};

export default Home;

