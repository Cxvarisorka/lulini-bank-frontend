import { Outlet } from "react-router-dom";
import SideBar from "../components/sidebar.jsx";
import TopDashboard from "../components/DashboardComponent/dashboardParts/topDashboard.jsx";


const Dashboard = () => {
    return (
        <>
            <div className="relative sm:flex ">
                <SideBar />
                <div className="flex flex-col gap-8 w-full p-8">
                    <TopDashboard userName={"Luka Tskhvaradze"}/>
                    <Outlet /> 
                </div>
                
            </div>
        </>
    )
}

export default Dashboard;