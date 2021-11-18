/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import aboutimage from '../images/about.png'

function About() {
    return (
        <div className='about'>
            <div className='about-model'>
                <img src={aboutimage} alt='about image'/>
            </div>
            <div className='about-text'>
                <h2>We Are <br/>Real Estate Company</h2>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Tenetur, hic velit vero maiores 
                    laborum nihil culpa voluptas minus dolore? 
                    Delectus maxime est sapiente quo deserunt optio, a aspernatur modi ad!</p>
                    <button>View More Details</button>
            </div>            
        </div>
    )
}

export default About
