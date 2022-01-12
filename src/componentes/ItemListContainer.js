import React from 'react'
import ItemCount from './ItemCount'
import Saludo from './Saludo'
import { useState, useEffect } from 'react'
import { Products } from './mocks/products'
import { ItemList } from './itemList'
import ItemDetailContainer from './ItemDetailContainer'



export default function ItemListContainer() {
    const[productos,setProductos]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        Products
        .then(resp=>setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    
    return (
        <div>
            {loading ? (
                <h2>Cargando...</h2> 
            ):(
                <><Saludo saludo="Bienvenidos a mi E-Comerce" />
                <ItemCount stock={10} />
                <ItemList productos={productos} />
                </>
            )}
        </div>

    )
}
