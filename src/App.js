import React from "react";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import Info from "./components/Info";
import Testimonios from "./components/Testimonios";
import Faq from "./components/Faq";
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
        <Footer/>
      </main>
    </div>
  );
}

export default App;
