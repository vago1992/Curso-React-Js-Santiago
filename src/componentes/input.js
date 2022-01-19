
import React from 'react'

export const Input = () => {

    const inputHandler=(event)=>{
        event.preventDefault()
        event.stopPropagation()
        console.log(event.nativeEvent)
    }
    return (
        <div>
            <input onKeyDown={inputHandler} type="text" name="i" id="i"/>
        </div>
    )
}
