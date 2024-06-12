import { useContext } from "react"
import TopDashboard from "./dashboardParts/topDashboard"
import { Outlet } from "react-router-dom"
import { dataContext } from "../../context/dataContext"

const DashboardLayout = () => {
    const {account} = useContext(dataContext);

    return (
        <>
            <TopDashboard userName={account?.fullname} />
            <Outlet /> 
        </>
    )
}

export default DashboardLayout;