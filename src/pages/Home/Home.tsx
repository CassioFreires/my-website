import Hero from "../../components/Home/Hero/Hero";
import WhoItsFor from "../../components/Home/WhoItsFor/WhoItsFor";
import WorkProcess from "../../components/Home/WorkProcess/WorkProcess";
import CallToAction from "../../components/Home/CallToAction/CallToAction";
import Testimonials from "../../components/Home/Testemonials/Testimonials";
import FAQ from "../../components/Home/FAQ/FAQ";
import './Home.css';

export function Home() {
    return (
        <main className="home-page">
            <Hero />
            <WhoItsFor />
            <WorkProcess />
            <CallToAction />
            <Testimonials />
            <FAQ />
        </main>
    );
}