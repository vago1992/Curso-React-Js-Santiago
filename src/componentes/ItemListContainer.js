import React from 'react'
import ItemCount from './ItemCount'
import Saludo from './Saludo'


export default function ItemListContainer() {
   
    return (
        <div>
            <Saludo saludo="Bienvenidos a mi E-Comerce"/>
            <ItemCount/>

        </div>
    )
}
