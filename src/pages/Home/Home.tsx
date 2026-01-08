import Hero from "../../components/Home/Hero/Hero";
import WhatIDo from "../../components/Home/WhatIDo/WhatIDo";
import WhoItsFor from "../../components/Home/WhoItsFor/WhoItsFor";
import WorkProcess from "../../components/Home/WorkProcess/WorkProcess";
import CallToAction from "../../components/Home/CallToAction/CallToAction";
import Testimonials from "../../components/Home/Testemonials/Testimonials";
import Stats from "../../components/Home/Stats/Stats";
import FAQ from "../../components/Home/FAQ/FAQ";

export function Home() {
    return (
        <main className="space-y-24">
            <Hero />
            <WhatIDo />
            <WhoItsFor />
            <WorkProcess />
            <CallToAction />
            <Testimonials />
            <Stats />
            <FAQ />
        </main>
    );
}