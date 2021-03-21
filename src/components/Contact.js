import React from 'react'
import './Contact.css';
import tesla from './assets/tesla.svg'
import oracle from './assets/oracle.svg'
import nvidia from './assets/nvidia.svg'
import microsoft from './assets/microsoft.svg'
import hp from './assets/hewlett-packard.svg'
import google from './assets/google.svg'
function Contact() {
    const companies=[
        tesla,oracle,nvidia,microsoft,hp,google
    ]
    return (
        <div className="contact-container container row">
            <div className="col-sm-12 col-sm-6">
            <h1 className="heading">Submit a help request and we’ll get in touch shortly.</h1>


    <form>
    <input type="text" placeholder=" Name"></input>

<input type="text" placeholder=" Email"></input>
<input type="text" placeholder=" Company Name"></input>
<input type="text" placeholder=" title"></input>
<textarea placeholder="Message"></textarea>
<button>Submit</button>
    </form>

            </div>

            <div className="col-sm-12 col-lg-6 companies">

                <h4>Join the thousands of innovators already building with us</h4>
          
          <div className="row c-row">
            {companies.map((company)=>(
                <div className="col-sm-6 col-sm-4">
                    <img src={company} className="filter" />
                </div>
            ))}
          </div>
            </div>
        </div>
    )
}

export default Contact
