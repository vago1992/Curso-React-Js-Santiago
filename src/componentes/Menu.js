import React from "react";
import './Menu.css';
import CartWidget from "./CartWidget";

function Menu (){
    return (
        <div className="fondo">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="servicios.html">Servicios</a>
                    </li>
                    <li>
                        <a href="galeria.html">Galeria</a>
                    </li>
                    <li>
                        <a href="contacto.html">Contacto</a>            
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
              
                </ul>
            </nav>
            

        </div>

    )


        
}

export default Menu;

/* 
    function Menu ({item}){
    return (
        <div className="fondo">
            <nav>
                <ul className="menu">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="nosotros.html">Nosotros</a>
                    </li>
                    <li>
                        <a href="servicios.html">Servicios</a>
                    </li>
                    <li>
                        <a href="galeria.html">Galeria</a>
                    </li>
                    <li>
                        <a href="contacto.html">Contacto</a>            
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
              
                </ul>
            </nav>
            {item()}

        </div>

    )

*/

