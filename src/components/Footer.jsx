import React from "react";
import logo from '../img/logo.png'

function Footer(){
    return(
        <div>
            <div class="footer__col">
                <img src={logo} alt="logo"/>
                <br/>
                Copyright © 2022 Ciclo Project. <br/>
                Todos los derechos reservados.
            </div>
            <div class="footer__col">
                <a class="footlink" href="conocenos.html">¿Quiénes somos?</a> <br/><br/><br/>
                <a class="footlink" href="conocenos.html">Sobre la Empresa</a><br/><br/><br/>
                <a class="footlink" href="contacto.html">Trabaja con Nosotros</a>
            </div>
            <div class="footer__col">
                <a class="footlink" href="conocenos.html">Términos de uso</a><br/><br/><br/>
                <a class="footlink" href="conocenos.html">Políticas de Privacidad</a><br/><br/><br/>
                <a class="footlink" href="contacto.html">Contáctanos</a>
            </div>
        </div>
    )
}

export default Footer