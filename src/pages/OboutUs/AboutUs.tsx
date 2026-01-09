import './AboutUs.css';

import AboutHero from '../../components/AboutUs/AboutHero/AboutHero';
import WhatIDo from '../../components/AboutUs/WhatIDo/WhatIDo';
import AboutExperience from '../../components/AboutUs/AboutExperience/AboutExperience';
import AboutHighlights from '../../components/AboutUs/AboutHighLights/AboutHighLights';
import AboutValues from '../../components/AboutUs/AboutValues/AboutValues';
import Stats from '../../components/Home/Stats/Stats';

function About() {
  return (
    <main className="about-page">
      <AboutHero />
      <WhatIDo />
      <AboutExperience />
      <AboutHighlights />
      <AboutValues />
      <Stats />
    </main>
  );
}

export default About;
