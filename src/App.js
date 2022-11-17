import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Info from "./components/Info";
import Testimonios from "./components/Testimonios";
import Faq from "./components/Faq";
import AboutUs from "./components/AboutUs";
import OurMission from "./components/OurMission";
import OurTeam from "./components/OurTeam";
import OurVision from "./components/OurVision";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Inicio/>
        <Info/>
        <Testimonios/>
        <Faq/>
        <div className="Conocenos">
          <AboutUs/>
          <OurMission/>
          <OurVision/>
          <OurTeam/>
        </div>
        <div className="Contacto">
          <ContactUs/>
        </div>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
