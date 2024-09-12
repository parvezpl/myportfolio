import React from 'react'
import "./nav.css"
import CenterBox from './center_box';
export function Nav(props) {


    return (
        <>
            <div className='navi'>
                <div className='navi-name'><span>Parvez Alam</span></div>
                <div className='navi-end'>
                    <div className='navi-option'>
                        <span>home</span>
                        <span>about</span>
                        <span>service</span>
                        <span>blog</span>
                        <span>contact</span>
                    </div>
                    <div className='navi-login'><span>Login</span></div>
                </div>
            </div>
        </>
    )
}
