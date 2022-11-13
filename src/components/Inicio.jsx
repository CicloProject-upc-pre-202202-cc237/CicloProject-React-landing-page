import React from "react";
import header from '../img/inicio-header.png'

function Inicio(){
    return(
        <section id="inicio">
            <div class="container body__container">
                <div class="body__left">
                    <h1><b>El mejor lugar para ciclistas como tú</b></h1>
                    <p>Con nosotros podrás mejorar tanto tu rendimiento físico, como encontrar motivación para tus metas!</p>
                    <a class="btn" href="/#"><b>Regístrate Ahora</b></a>
                </div>
                <div class="body__right">
                    <img src={header} alt="Imagen del header del landing page" width="300px"></img>
                </div>
            </div>
        </section>
    )
}

export default Inicio