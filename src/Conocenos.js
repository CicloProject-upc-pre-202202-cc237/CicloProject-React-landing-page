import React from "react";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurMission from "./components/OurMission";
import OurTeam from "./components/OurTeam";
import OurVision from "./components/OurVision";

function Conocenos(){
    return(
        <div className="Conocenos">
            <main>
                <Header/>
                <AboutUs/>
                <OurMission/>
                <OurVision/>
                <OurTeam/>
                <Footer/>
            </main>
        </div>
    );
};

export default Conocenos;