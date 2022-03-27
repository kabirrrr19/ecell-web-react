import React from 'react'
import Hero from "./Hero/Hero.js";
import About from "./About/About";
import Whyus from "./Whyus/Whyus.js";
import Clients from "./ClientsComponent/Clients.js";
import Services from "./ServicesComponent/Services.js";
import Cta from "./Cta/Cta.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Pricing from "./Pricing/Pricing.js";
import Teams from "./Teams/Teams.js";
import Contacts from "./Contacts/Contacts.js";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Whyus />
      <Clients />
      <Services />
      <Cta />
      <Portfolio />
      <Pricing />
      <Teams />
      <Contacts />
    </div>
  );
}

export default Home