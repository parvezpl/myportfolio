import React from 'react'
import { Inputbox, LoginButton } from './inputbox/inputbox'
import "./login.css"
export function Login(props) {
    

    return (
        <div className='maincontainer'>
            <div className='login-box'>
                <div className='inleftbox'></div>
                <div className='inrightbox'>
                    <Inputbox 
                    placeholder="username"
                    />
                    <Inputbox 
                    placeholder="pasword"
                    />
                    <LoginButton 
                    placeholder="login"
                    />
                    <div className='inputBox-acount-text'>
                        <p>Create Account</p>
                        <p>Forget Password</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
