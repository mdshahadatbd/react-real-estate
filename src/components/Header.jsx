/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <div className='header'>
        <a href="#" className="logo">
            <img src='' alt=''/>          
        </a>
        <Navbar/> 
        <div className='intro'>
            <p>Looking for a Property!</p>
            <h1><span>BUY</span> and <span>Sell</span> Properties</h1>
            <p className='details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat officiis consectetur in rerum magnam nobis molestiae dolorum, necessitatibus illum accusantium ex accusamus adipisci culpa, impedit dolor animi, blanditiis itaque temporibus!</p>
            <a href='#' className='header-btn'>Details</a>
        </div>
        </div>

    )
}

export default Header
