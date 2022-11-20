import React from "react";
import pasos from "../img/ciclistas-pasos.png";

function Pasos(){
    return(
        <section class="pasos">
            <h2>DRIVING WITH US IS AS SIMPLE AS</h2>
            <h1>MANEJAR CON NOSOTROS ES TAN FÁCIL COMO</h1>
            <br></br>
            <img src={pasos} alt="Imagen de los pasos del ciclista" class="center-image"></img>
        </section>
    )
}

export default Pasos