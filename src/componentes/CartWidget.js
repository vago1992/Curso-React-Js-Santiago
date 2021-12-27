import carrito from "./carrito.png";
import React from 'react';
import './Menu.css';

export default function CartWidget() {
    return (
        <div>
            <img src={carrito} className="carrito"/>
        </div>
    )
}
