import React from 'react'
import Bproperty from './Bproperty'
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'

function Properties() {
    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>Properties</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='product-container'>
            <Bproperty image={pimage1} name='Home' price='$24,00'/>
            <Bproperty image={pimage2} name='House' price='$25,000'/>
            <Bproperty image={pimage3} name='Estate' price='$2660'/>
            </div>
            
        </div>
    )
}

export default Properties
