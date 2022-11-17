import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Info from "./components/Info";
import Testimonios from "./components/Testimonios";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import OurTeam from "./components/OurTeam";
import ContactUs from "./components/ContactUs";
import OurVision from "./components/OurVision";
import OurMission from "./components/OurMission";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Inicio/>
        <Info/>
        <Testimonios/>
        <Faq/>
        <AboutUs/>
        <OurMission/>
        <OurVision/>
        <OurTeam/>
        <ContactUs/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
