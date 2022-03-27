import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topbar from "./Components/Home/Topbar/Topbar.js";
import Header from "./Components/Home/Header/Header.js";

import Footer from "./Components/Home/Footer/Footer.js";
import Esummit from "./Components/ESummit/Esummit.js" 
import Home from "./Components/Home/Home"

function App() {
  return (
    //   <div className="App">
    //     <Topbar />
    //     <Header />
    //     <Home />
    //     <Esummit />
    //     <Footer />
    //   </div>

    <BrowserRouter>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Esummit" element={<Esummit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
