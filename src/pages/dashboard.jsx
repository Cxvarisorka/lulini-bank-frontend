import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar.jsx";
import TopDashboard from "../components/DashboardComponent/dashboardParts/topDashboard.jsx";
import DashboardLayout from "../components/DashboardComponent/dashboardLayout.jsx";


const Dashboard = () => {
    return (
        <>
            <div className="relative sm:flex ">
                <SideBar />
                <div className="flex flex-col gap-8 w-full p-8">
                    <DashboardLayout></DashboardLayout>
                </div>
                
            </div>
        </>
    )
}

export default Dashboard;