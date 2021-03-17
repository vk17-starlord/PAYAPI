import React from 'react';

import {Link} from "react-router-dom";
import './Navbar.css'
import logo from './assets/logo.svg'
function Navbar() {
    return (
        <div className="navbar row">
      <div className="col-sm-12 col col-lg-2 col-md-3">
  <Link to='/'>      <img src={logo} alt="logo" />
</Link>
      </div>
      
      <div className="col-sm-12 col col-lg-6 col-md-5  " >
     
     <Link to='/Pricing'><span>Pricing</span></Link>
     <Link to='/About'><span>About</span></Link>
     <Link to='/Contact'><span>Contact</span></Link>
     
      </div>
     
      <div className="col-sm-12 col col-lg-4 col-md-4 end  ">
<Link to='/Contact'><button className='cta-btn' >Schedule a Demo</button></Link>
      </div>

        </div>
    )
}

export default Navbar
