import './App.css';
import Topbar from "./Components/Topbar.js";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import About from "./Components/About.js";
import Whyus from "./Components/Whyus.js";
import Clients from "./Components/Clients.js";
import Services from "./Components/Services.js";
import Cta from "./Components/Cta.js";
import Portfolio from "./Components/Portfolio.js";
import Pricing from "./Components/Pricing.js";
import Teams from "./Components/Teams.js";
import Contacts from "./Components/Contacts.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
