import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from './itemList'

export default function Items() {

    const[productos,setProductos]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(() => {
        ItemList
        .then(resp=>setProductos(resp))
        .catch(err=>console.log(err))
        .finally(()=>setLoading(false))
    }, [])
    return (
        <div>
            {loading ? <h2>Cargando...</h2> : 
            productos.map(prod=><div key={prod.id} className='itemList'>

                <div>
                    {`${prod.nombre}`}
                </div>

                <div>
                    {prod.foto}<br/>
                    
                    {prod.precio}
                </div>
                    
                <div>
                    <button>Ver Producto</button>

                </div>
                
            </div>)}
            
        </div>
    )
}


