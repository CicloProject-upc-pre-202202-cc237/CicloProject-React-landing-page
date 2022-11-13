import React from "react";
import inicio_info from '../img/inicio-info.png'

function Info(){
    return(
        <section class="info">
            <div class="container info__container">
                <div class="info__left">
                    <img src={inicio_info} width="400px" alt="Informacion estadistica de landing page"></img>
                </div>
                <div class="info__right">
                    <h1><b>Mejora tu actividad física y ayuda a los demás</b></h1>
                    <br></br>
                    <p>Con nuestras herramientas podrás encontrar nuevas rutas y podrás ayudar a nuevos ciclistas!</p>
                    <a class="btn saber_mas_btn" href="/#"><b>Saber más</b></a>
                </div>
            </div>
        </section>
    )
}

export default Info