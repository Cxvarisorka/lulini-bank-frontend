import DynamicHero from "../components/dynamichero";
import OurAgents from "../components/ouragents";
import OurCompany from "../components/ourcompany";

const AboutUs = () => {
    return (
        <main>
            <DynamicHero title={"About Us"}/>
            <OurCompany />
            <OurAgents />
        </main>
    )
}

export default AboutUs;