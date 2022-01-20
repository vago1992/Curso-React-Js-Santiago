import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from './input'
import { Intercambiabilidad } from './Intercambiabilidad'
import ItemCount from './ItemCount'


export default function ItemDetail({producto}) {
    const[show,setShow]=useState(true)
    const onAdd=(contador)=>{
        setShow(false)
        /* sumarAlCarrito({...product, cantidad: contador})*/
    }

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            <h3>Stock:{producto.stock}</h3>
            {producto.foto}
            {/*<Input/>
            <Intercambiabilidad/>*/}
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd}/>: <Link to={"/cart"}><button>Finalizar Compra</button></Link>}
        </div>
    )
}

