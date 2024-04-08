import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar.jsx";


const Dashboard = () => {
    return (
        <>
            <div className="relative sm:flex ">
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard;