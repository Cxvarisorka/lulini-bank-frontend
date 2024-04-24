import TopDashboard from "./dashboardParts/topDashboard"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
    return (
        <>
            <TopDashboard userName={"Luka Tskhvaradze"} />
            <Outlet /> 
        </>
    )
}

export default DashboardLayout;