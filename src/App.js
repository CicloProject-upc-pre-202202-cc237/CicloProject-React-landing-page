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
import Ciclistas from "./components/Ciclistas";
import Pasos from "./components/Pasos";
import  AboutProduct from "./components/AboutProduct";
import Planes from "./components/Planes";

function App() {
  return (
    <div className="App">
      <main>
        <Header/>
        <Inicio/>
        <Info/>
        <Testimonios/>
        <Faq/>
        <Ciclistas/>
        <Pasos/>
        <AboutProduct/>
        <Planes/>
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
