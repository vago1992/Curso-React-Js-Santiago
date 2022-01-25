import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContex } from '../context/cartContext'


export default function ItemDetail({producto}) {
    /*const{cartList, agregarAlCarrito}=useContext(CartContex)*/
    const[show,setShow]=useState(true)
    const onAdd=(contador)=>{
        setShow(false)
        console.log(contador)
        
        /*agregarAlCarrito({...producto, cantidad:contador}) */
    }

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            <h3>Stock:{producto.stock}</h3>
            {producto.foto}
            {/*<Input/>
            <Intercambiabilidad/>*/}
            
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd}/>: 
                <div>
                    <Link to={"/cart"}><button>Finalizar Compra</button></Link>
                    <Link to={"/"}><button>Seguir Comprando</button></Link>
                </div>}
            
        </div>

    )

}

