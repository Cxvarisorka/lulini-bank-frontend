import DashboardInfo from "../components/dashboardinfo.jsx";
import DynamicHero from "../components/dynamichero.jsx";
import HowItWork from "../components/howitwork.jsx";

const HowItWorks = () => {
    return (
        <>
            <DynamicHero title={"How It Works"}/>
            <DashboardInfo />
            <HowItWork />
        </>
    )
}

export default HowItWorks;