import { useContext } from "react"
import TopDashboard from "./dashboardParts/topDashboard"
import { Outlet } from "react-router-dom"
import { dataContext } from "../../context/dataContext"

const DashboardLayout = () => {
    const {account} = useContext(dataContext);

    return (
        <>
            <TopDashboard userName={account?.firstname + " " + account?.lastname} />
            <Outlet /> 
        </>
    )
}

export default DashboardLayout;