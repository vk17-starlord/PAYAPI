import React from 'react'
import logo from './assets/logo-white.svg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import twitter from './assets/twitter.svg'

 import './Footer.css'
 
import {Link} from "react-router-dom";
function Footer() {
    return (
        <footer>
       <div className="container footer row">
<div className="col-sm-12 col-lg-2 col">
    <img src={logo} alt="logo"/>
</div>
<div className="col-sm-12 col-lg-4 col space">
<Link to='/Pricing'><span>Pricing</span></Link>
     <Link to='/About'><span>About</span></Link>
     <Link to='/Contact'><span>Contact</span></Link>
</div>
<div className="col-sm-12 col-lg-6 col end">
    <span><img alt="txt" src={facebook} /></span>
    <span><img alt="txt" src={linkedin} /></span>
    <span><img alt="txt" src={twitter} /></span>

</div>
            
        </div>             
        </footer>
    )
}

export default Footer
