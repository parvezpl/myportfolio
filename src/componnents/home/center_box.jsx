import React from 'react'
import './centerbox.css'
import homeimg from './../../assets/home.jpg'
import { Inputbox } from '../login/inputbox/inputbox'
export default function CenterBox(props) {
    
    const placeholder ="user name"
    const news ="new value"
    return (
        <>
            <div className='main-page-box'>
                <div className='leftbox'>
                    <div className='textbox'>
                        <span className='textbox1'>hello!</span>
                        <span className='textbox2'>I Am Parvez Alam</span>
                        <span className='textbox3'>hi, i am full stack web developor fresher, i am know frotend and backend very well, i am using react.js for frotend and node.js for backend base on javacript.</span>
                    </div>
                    <div className='buttonbox'>
                        <button>View Work</button>
                        <button>hire me</button>
                        {/* <div className='view_work'></div>
                        <div className='hire_me'></div> */}
                    </div>
                </div>
                <div className='rightbox'>
                    <img src={homeimg} alt="" className='img' />
                </div> hello
            </div>
                {/* <Inputbox placeholder={placeholder} news={news}/> */}
        </>
    )
}
