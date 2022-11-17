import React from "react";
import Joshua from "../img/about-joshua.png";
import Juan from "../img/about-juan.png";
import Franco from "../img/about-franco.png";
import Leonardo from "../img/about-leonardo.png";
import Alejandro from "../img/about-alejandro.png";
import Social from "../img/about-social.png";

function OurTeam(){
    return(
        <section class="team">
            <div>
                <h2>OUR TEAM</h2>
                <h1>NUESTRO EQUIPO</h1>
                <p>Somos una grupo de personas capacitadas para darte siempre lo mejor.</p>
            </div>
            <div class="container team__container">
                <div class="team__box">
                    <h1>Joshua Diaz</h1>
                    <img src={Joshua} alt="Imagen de Joshua Diaz de Conócenos del Landing Page"></img>
                    <p>Licenciado en Ciencias de la Computación</p>
                    <img src={Social} alt="Imagen de Social Media de Conócenos del Landing Page" width={"50%"}></img>
                </div>
                <div class="team__box">
                    <h1>Juan Flores</h1>
                    <img src={Juan} alt="Imagen de Juan Flores de Conócenos del Landing Page"></img>
                    <p>Licenciado en Ciencias de la Computación</p>
                    <img src={Social} alt="Imagen de Social Media de Conócenos del Landing Page" width={"50%"}></img>
                </div>
                <div class="team__box">
                    <h1>Franco Galindo</h1>
                    <img src={Franco} alt="Imagen de Franco Galindo de Conócenos del Landing Page"></img>
                    <p>Licenciado en Ciencias de la Computación</p>
                    <img src={Social} alt="Imagen de Social Media de Conócenos del Landing Page" width={"50%"}></img>
                </div>
                <div class="team__box">
                    <h1>Leonardo Goyas</h1>
                    <img src={Leonardo} alt="Imagen de Leonardo Goyas de Conócenos del Landing Page"></img>
                    <p>Licenciado en Ciencias de la Computación</p>
                    <img src={Social} alt="Imagen de Social Media de Conócenos del Landing Page" width={"50%"}></img>
                </div>
                <div class="team__box">
                    <h1>Alejandro López</h1>
                    <img src={Alejandro} alt="Imagen de Alejandro López de Conócenos del Landing Page"></img>
                    <p>Licenciado en Ciencias de la Computación</p>
                    <img src={Social} alt="Imagen de Social Media de Conócenos del Landing Page" width={"50%"}></img>
                </div>
            </div>
        </section>
    );
}

export default OurTeam