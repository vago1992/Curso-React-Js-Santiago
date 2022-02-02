import React,{useContext} from 'react';
import { CartContex } from '../context/cartContext';
import { Link } from "react-router-dom";

export default function Cart() {
    const {cartlist,deleteItem,vaciarCarrito,total}=useContext(CartContex);
    return (
        <>
        
        {cartlist.length===0 ?(
            <div>
                <h2>Aun No agregaste Nada</h2>
                <Link to="/">
                    <button>Ir al Catalogo</button>
                </Link>
            </div>
        ) : (
            <>

            {cartlist?.map((prod) => (
                <div key={prod.id} className='containerCart'>
                    <img src={prod.foto} alt={prod.nombre}/>
                    <div
                        style={{
                            display:"flex",
                            alignItems:"center",
                            justifyContet:"space-between",
                            width:"300px",
                        }}
                    >
                        <h3>{prod.nombre}</h3>
                        <h3>{prod.precio}</h3>
                        <h3>Cantidad:{prod.cantidad}</h3>
                        <button onClick={()=>deleteItem(prod.id)}>X</button>
                    </div>
                </div>
            ))}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <h3>{total()}</h3>
            </>
        )}
      
    </>   
    );
}