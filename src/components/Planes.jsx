import React from "react"

function Planes(){
    return(
        <section class="planes">
            <br></br>
            <h2>PLANS AND PRICES</h2>
            <h1>PLANES Y PRECIOS</h1>
            <p>Aquí puedes apreciar los planes que tenemos para ti!</p>
            <div class="container planes__container">
                <div class="planes__left">
                    <h1>Free</h1>
                    <h2>S/0.00</h2>
                    <br></br>
                    <h3>Disfrutaras de muchas características dentro de la aplicación.</h3>
                    <br></br>
                    <button class="btn"><b>Regístrate</b></button>
                    <br></br>
                    <p>Interactuar con ciclistas</p>
                    <p>Ver rutas en buen estado</p>
                    <p>Se guarda toda tu actividad</p>
                </div>
                <div class="planes__right">
                    <h1>Premium</h1>
                    <h2>S/14.99</h2>
                    <br></br>
                    <h3>Tendrás todos los características del plan free y beneficios extras.</h3>
                    <br></br>
                    <button class="btn"><b>Regístrate</b></button>
                    <br></br>
                    <p>Todas los beneficios del plan Free</p>
                    <p>Sin publicidad</p>
                    <p>Ver rutas especial</p>
                    <p>Participa de torneos y promociones</p>
                </div>
            </div>
        </section>
    )
}
export default Planes