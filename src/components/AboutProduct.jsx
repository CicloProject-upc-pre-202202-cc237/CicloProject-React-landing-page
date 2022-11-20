import React from "react"
import sobres from "../img/ciclistas-sobres.png"

function AboutProduct(){
    return(
        <section class="sobre">
            <h2>ABOUT THE PRODUCT</h2>
            <h1>SOBRE EL PRODUCTO</h1> 
            <div class="container sobre__container">
                <div class="sobre__left">
                    <img src={sobres} alt="Imagen sobre el producto"></img>
                </div>
                <div class="sobre__right">
                    <p>La Ciclo Ruta App beneficia a todos los tipos de ciclistas, no importa si eres un ciclista casual o uno que entrena y hace rutas largas. Con nosotros podas ver que zonas son mejores para transitar, que vías están bien cuidadadas, que zonas son peligrosas, recomendaciones sobre carrreteras, rutas, y tiendas relacionadas al ciclismo.</p>
                    <button class="btn" href="/#"><b>Regístrate ahora</b></button>
                </div>
            </div>
        </section>
    )
}

export default AboutProduct