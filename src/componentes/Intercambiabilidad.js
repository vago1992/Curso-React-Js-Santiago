import React from 'react'
import { useState, useEffect } from 'react'

const InputCount=()=>{
    return (
        <button onClick={()=>console.log("Ir al cart")}>Carrito</button>
    )

}
const ButtonCount=(handleInter)=>{
    return (
        <button onClick={handleInter}>Agregar al carrito</button>
    )

}


export const Intercambiabilidad = () => {
    const[inputType,setInputType]= useState("button")

    const handleInter=()=>{
        setInputType("input")
    }
    return (
        <div>
            <h2>Descripcion Producto</h2>
            {
                inputType==="button"?
                <ButtonCount handleInter={handleInter}/>
                :
                <InputCount/>
            }
            
        </div>
    )
}
