import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className="2xl:mx-64">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;