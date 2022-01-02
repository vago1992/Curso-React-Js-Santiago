import React from 'react'
import ItemCount from './ItemCount'
import Saludo from './Saludo'
import Items from './Items'


export default function ItemListContainer() {

  
    return (
        <div>
            
            <Saludo saludo="Bienvenidos a mi E-Comerce"/>
            <ItemCount stock= {10}/>
            <Items/>

        </div>

    )
}
