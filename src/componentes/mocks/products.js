import { useState, useEffect } from 'react'
import pcGamer from "./imagenes/pcGamer.png";
import laptop from "./imagenes/laptop.png";
import iphone from "./imagenes/iphone.png";
import SmartTv from "./imagenes/SmartTv.png";
import './products.css';

const productos=[
    {id:"1", nombre:"Smart TV", precio:"$25.000",stock:100, categoria:"TV", foto:<img src={SmartTv} className="fotoProducto"/>},
    {id:"2", nombre:"PC Gamer", precio:"$180.000",stock:55, categoria:"PC", foto:<img src={pcGamer} className="fotoProducto"/>},
    {id:"3", nombre:"Iphone 13", precio:"$560.000",stock:65, categoria:"Celulares", foto:<img src={iphone} className="fotoProducto"/>},
    {id:"4", nombre:"Laptop", precio:"$120.000",stock:85, categoria:"PC", foto:<img src={laptop} className="fotoProducto"/>}

];


export const Products= new Promise((resolve,reject)=>{
    
    let condicion=true
    if(condicion){
        setTimeout(()=>{
            resolve(productos)
        },3000)

    }
    else{
        reject("error")
    }
})
