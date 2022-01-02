import { useState, useEffect } from 'react'
import pcGamer from "./pcGamer.png";
import laptop from "./laptop.png";
import iphone from "./iphone.png";
import SmartTv from "./SmartTv.png";
import './Menu.css';




export const ItemList= new Promise((resolve,reject)=>{
    const productos=[
        {id:1, nombre:"Smart TV", precio:"$25.000", foto:<img src={SmartTv} className="fotoProducto"/>},
        {id:2, nombre:"PC Gamer", precio:"$180.000",foto:<img src={pcGamer} className="fotoProducto"/>},
        {id:3, nombre:"Iphone 13", precio:"$560.000",foto:<img src={iphone} className="fotoProducto"/>},
        {id:4, nombre:"Laptop", precio:"$120.000",foto:<img src={laptop} className="fotoProducto"/>}
    
    ];
    let condicion=true
    if(condicion){
        setTimeout(()=>{},3000)
        resolve(productos)

    }
    else{
        reject("error")
    }
})
