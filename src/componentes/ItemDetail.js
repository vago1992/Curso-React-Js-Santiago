import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContex } from '../context/cartContext'


export default function ItemDetail({producto}) {
    const[show,setShow]=useState(true)
    const{addToCart}=useContext(CartContex)

    const onAdd=(contador)=>{
        addToCart(producto,contador)
        setShow(false)   
    }

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            <h3>Stock:{producto.stock}</h3>
            {producto.foto}
            {/*<Input/>
            <Intercambiabilidad/>*/}
            
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd} initial={1}/>: 
                <div>
                    <Link to={"/cart"}><button>Finalizar Compra</button></Link>
                    <Link to={"/"}><button>Seguir Comprando</button></Link>
                </div>}
            
        </div>

    )

}

