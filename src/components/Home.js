import React from 'react'
import './Home.css'
import hero from './assets/home/illustration-phone-mockup.svg'
function Home() {
    return (
        <div className='home'>
        <div className='hero-container'>
            <div className='container row'>

<div className='col-sm-12 col-sm-6 hero-txt'>
    <h4>
    Start building with our APIs for absolutely free.
    </h4>
    <div className='input'>
    <input type='text' placeholder='Enter Email Address'/>
       <button className='btn'>Schedule a Demo</button>
        </div>
</div>
<div className='col-sm-12 col-sm-6 hero-img'>
    <img src={hero} alt='hero' />
</div>

            </div>
            </div>    
        </div>
    )
}

export default Home
