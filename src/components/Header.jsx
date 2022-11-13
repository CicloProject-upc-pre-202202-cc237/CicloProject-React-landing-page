import React from "react";
import logo from '../img/logo.png'

function Header(){
    return(
        <ul>
            <li><img src={logo} alt="logo" width="50px" height="50px"></img></li>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#ciclistas">Ciclistas</a></li>
            <li><a href="#planes">Planes</a></li>
            <li><a href="#conocenos">Conócenos</a></li>
            <li><a href="#contacto">Contacto</a></li>
        </ul>
    )
}

export default Header