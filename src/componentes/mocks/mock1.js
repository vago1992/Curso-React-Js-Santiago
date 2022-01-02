import { useState, useEffect } from 'react'
const productos=[
    {id:1, nombre:"Smart TV", precio:25.000, foto:},
    {id:2, nombre:"PC Gamer", precio:180.000,foto:},
    {id:3, nombre:"Iphone XIII", precio:560.000,foto:},
    {id:4, nombre:"Laptop", precio:120.000,foto:}

];
export const getFetch= new Promise((resolve,reject)=>{
    const productos=[
        {id:1, producto:"Tv"},
        {id:2, producto:"Pc"}
    
    ];
    let condicion=true
    if(condicion){
        setTimeout(()=>{},2000)
        resolve(productos)

    }
    else{
        reject("error")
    }
})


/*export default function mock1() {
    tarea
    .then(resp=>{
        return{... resp, id:1}
    })
        //throw new Error("error critico")})
    .then(resp=>console.log(resp))
    .catch(err =>console.log(err))
    .finally(()=> alert("Siempre al final"))}*/