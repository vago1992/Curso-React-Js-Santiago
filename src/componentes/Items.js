import React from 'react'


export default function Items({producto}) {


    return (
        <div>
            <h2>{producto.nombre}</h2>
            <h3>Precio:{producto.precio}</h3>
            {producto.foto}
            <br/>
            <button className='botonProd'>Detalles producto</button>
            
        </div>
    )
}



