import React from 'react';
import { useState, useEffect } from 'react';
import './Menu.css';
 



export default function ItemCount(stock) {

    const [count,setCount]= useState(1)


    //const count=0
    const handleCount=()=>{
        if (count<stock.stock){
            //     count=count+1;
            setCount(count+1)

            //setFechaYHora(Date)
        }
    
    }
    const reduceCount=()=>{
        if (count>1){
            setCount(count-1)
        }     
    }
    
    return (
        <div className='moduloCompras'>
            <fieldset className='recuadro'>
                <p>Camisa Manga Larga</p>
                <button onClick={handleCount} className='countSum'>+</button>
                {count}
                <button onClick={reduceCount} className='countExtract'>-</button>
                <br></br>
                <button>Agregar Carrito</button> 

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
