import React from 'react'
import './Home.css'
import hero from './assets/home/illustration-phone-mockup.svg'
import { Link } from 'react-router-dom'
import tesla from './assets/tesla.svg'
import oracle from './assets/oracle.svg'
import nvidia from './assets/nvidia.svg'
import microsoft from './assets/microsoft.svg'
import hp from './assets/hewlett-packard.svg'
import google from './assets/google.svg'
import finance from './assets/home/icon-personal-finances.svg'
import consumer from './assets/home/icon-consumer-payments.svg'
import banking from './assets/home/icon-banking-and-coverage.svg'

function Home() {
const companies=[
    tesla,oracle,nvidia,microsoft,hp,google
]

const features=[
    {
        img:finance,
        heading:'Personal Finances',
        para:"Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account."
    },

    {
        img:banking,
        heading:'Banking & Coverage',
        para:"With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts." 
    },
    {
        img:consumer,
        heading:'Consumer Payments',
        para:"It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account."
    },
]



    return (
        <div className='home'>
        <div className='hero-container'>
            <div className='container row'>
            <div className='col-sm-12 col-sm-6 hero-img show-mob'>
    <img src={hero} alt='hero' />
</div>

<div className='col-sm-12 col-sm-6 hero-txt'>
    <h4>
    Start building with our APIs for absolutely free.
    </h4>
    <div className='input'>
    <input type='text' placeholder='Enter Email Address'/>
    <Link to='/Contacts'>    <button className='btn'>Schedule a Demo</button></Link>
   
        </div>
        <p>Have any questions? <strong><Link to='/Contacts'><span>Contact Us</span></Link> </strong></p>
</div>
<div className='col-sm-12 col-sm-6 hero-img hide-mob'>
    <img src={hero} alt='hero' />
</div>

            </div>
            
            </div> 

<div className="work-container">
    <div className="container row">
    <div className="col-sm-12 col-lg-6 col">

<h4>
Who we work with</h4>
<p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users. </p>
<Link to="/About"><button className="btn-rounded">About Us</button></Link>
    </div>
    <div className="col-sm-12 col-lg-6 col">
        <div className=" row">
     {companies.map((company) =>(<div className="comp col-sm-4 col-lg-4"> 
     <img src={company} alt={company}/>
     </div>))}       
        </div>
    </div>

    </div>
</div>

<div className="container">
<div className="implement row">

    <div className="col-sm-12 col-lg-6 i-col">

<div className="img"></div>
    </div>
    <div className="col-sm-12 col-lg-6 i-col">
        <h4>Easy to Implement</h4>
        <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
    </div>

</div>
<div className="simple ">
<div className="s-col">
<h4>Simple UI & UX</h4>
<p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
</div>
<div className="s-col img">

</div>

</div>
</div>

<div className="card-container container row">
{
    features.map((feature) =>(
    <div className="col-sm-12 col-sm-4 feature">
      <img src={feature.img} />  
      <h4>{feature.heading}</h4>
      <p>{feature.para}</p>
     </div>))
}
</div>
<div className="container start row">
<div className="col-sm-12 col-sm-6 scol">
<h4>Ready to start?</h4>
</div>
<div className="col-sm-12 col-sm-6 scol">
<div className='input'>
    <input type='text' placeholder='Enter Email Address'/>
    <Link to='/Contacts'>    <button className='btn'>Schedule a Demo</button></Link>
   
        </div>
</div>

</div>
        </div>
    )
}

export default Home
