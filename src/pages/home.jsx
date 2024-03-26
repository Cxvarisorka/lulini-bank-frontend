import AppDownload from "../components/appdownload.jsx";
import Hero from "../components/hero.jsx";
import HowItWork from "../components/howitwork.jsx";
import OurAgents from "../components/ouragents.jsx";
import OurFeatures from "../components/ourfeatures.jsx";
import Testimonials from "../components/testimonials.jsx";
import WhyChooseUs from "../components/whychooseus.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
    return (
        <main>
            <Hero />
            <OurFeatures />
            <HowItWork />
            <OurAgents />
            <Testimonials />
            <WhyChooseUs />
            <AppDownload />
        </main>

    )
}

export default Home;