import React from "react";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function Contacto(){
    return(
        <div className="Contacto">
            <main>
                <Header/>
                <ContactUs/>
                <Footer/>
            </main>
        </div>
    );
};

export default Contacto;