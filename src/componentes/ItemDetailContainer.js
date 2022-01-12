import React from 'react'
import { useState, useEffect } from 'react'
import { Products } from './mocks/products'
import ItemDetail from "./ItemDetail"



export default function ItemDetailContainer() {
    const[producto,setProducto]=useState({})
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        Products
        .then(resp=>setProducto(resp.find(prod=>prod.id==="1")))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2> 
            ):(
                <>
                <ItemDetail producto={producto} />
                </>
            )}
        </div>

    )
}