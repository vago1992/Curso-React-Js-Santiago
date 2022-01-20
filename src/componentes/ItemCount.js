import React from 'react';
import { useState, useEffect } from 'react';
import './Menu.css';
 



export default function ItemCount(stock, onAdd) {

    const [contador,setCount]= useState(1)


    //const count=0
    const sumarAlCarrito=()=>{
        if (contador<stock.stock){
            //     count=count+1;
            setCount(contador+1)

            //setFechaYHora(Date)
        }
    
    }
    const restarAlCarrito=()=>{
        if (contador>1){
            setCount(contador-1)
        }     
    }
    
    return (
        <div className='moduloCompras'>
            <fieldset className='recuadro'>
                <p>Camisa Manga Larga</p>
                <button onClick={sumarAlCarrito} className='countSum'>+</button>
                {contador}
                <button onClick={restarAlCarrito} className='countExtract'>-</button>
                <br></br>
                <button onClick={()=>onAdd(contador)}>Agregar Carrito</button> 

            </fieldset>
              

            
         
        </div>
    )
}

/*const [FechaYHora, setFechaYHora]=useState(Date)
/*const [Boolean, setBoolean]=useState(true)


//const handleBoolean=()=>{
//    setBoolean(!Boolean)
//}
//useEffect(()=>{
//    console.log("Llamada Api")
//},[])
/*useEffect(()=>{
    console.log("Llamada Api 2")
},[Boolean])
useEffect(()=>{
    return()=>{
        console.log("Efecto limpieza")
    }
    
},[Boolean])*/
