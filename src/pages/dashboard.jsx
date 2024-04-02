import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar.jsx";


const Dashboard = () => {
    return (
        <>
            <div className="relative flex ">
                <SideBar />
                <Outlet />
            </div>
        </>
    )
}

export default Dashboard;