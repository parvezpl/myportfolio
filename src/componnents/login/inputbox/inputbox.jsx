import React from 'react'
import "./inputbox.css"

export function Inputbox ({
    placeholder,
}) {
    return (
        <>
            <input type="text" className='inputbox' placeholder={placeholder} />
        </>
    )
}

export function LoginButton ({
    placeholder
}){
    return <button className='loginbutton' >{placeholder}</button>
}
