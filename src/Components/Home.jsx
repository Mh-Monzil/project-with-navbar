import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Banner from "./Banner";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="p-4">
                <Banner></Banner>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;