import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext([])

export const CartContexProvider =({children})=>{
    const [cartlist,setCartlist]=useState([])
    function agregarAlCarrito(items){
        setCartlist([...cartlist,items])
        }
    return(
        <CartContex.Provider value={
            cartlist,
            agregarAlCarrito
        }>
            {children}
        </CartContex.Provider>
    )
}