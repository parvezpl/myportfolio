import React from 'react'
import "./inputbox.css"

export function Inputbox ({
    placeholder="apple",
    children
},props
) {
    
    console.log(props)
    return (
        <>
        <div >input box</div>
            <input type="text" className='inputbox' placeholder={""} />
        </>
    )
}
