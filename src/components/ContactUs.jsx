import React from "react";
import Ubicacion from "../img/contacto-ubicacion.png";
import Correo from "../img/contacto-correo.png";
import Telefono from "../img/contacto-telefono.png";

function ContactUs(){
    return(
        <section id="contacto" class="contacto">
            <div class="container contacto__container">
                <div class="contact__left">
                    <h2>CONTACT US</h2>
                    <h1>CONTACTO</h1>
                    <div>
                        <img src={Ubicacion} alt="Imagen de Ubicacion de Contacto del Landing Page"></img>
                        <h3>Ubicación:</h3>
                        <p>Prolongación Primavera 2390</p>
                    </div>
                    <br/>
                    <div>
                        <img src={Correo} alt="Imagen de Correo de Contacto del Landing Page"></img>
                        <h3>Correo:</h3>
                        <p>informes@cicloproject.com</p>
                    </div>
                    <br/>
                    <div>
                        <img src={Telefono} alt="Imagen de Teléfono de Contacto del Landing Page"></img>
                        <h3>Teléfono:</h3>
                        <p>+51 998001868</p>
                    </div>
                </div>
                <div class="contacto__right">
                    <br/><br/><br/><br/>
                    <input class="small_input" type="text" id="nombre" name="nombre" placeholder="Nombre"></input>
                    <input class="small_input" type="text" id="correo" name="correo" placeholder="Correo"></input>
                    <input class="small_input" type="text" id="tema" name="tema" placeholder="Tema"></input>
                    <input class="big__input" type="text" id="mensaje" name="mensaje" placeholder="Mensaje"></input>
                    <button class="btn"><b>Enviar</b></button>
                </div>
            </div>
        </section>
    );
}

export default ContactUs