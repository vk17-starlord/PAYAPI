import React from 'react'
import './Pricing.css';
import { Link } from 'react-router-dom'
function Pricing() {
    return (
        <div className="priceing">
            <div className="container">
                <h1>Pricing</h1>
                <div classname="row">
                    <div className="col-sm-12 col-sm-4 price-card">
                       <div className="txt">
                       <h4>Free Plan</h4>
                        <p id="txt-p">Build and test using our core set of products with up to 100 API requests</p>
                   <span className="number">$0.00</span>
                       </div>
                       <p id="chk" className="para"> Transactions</p>
                       <p id="chk" className="para"> Auth</p>
                       <p  id="chk" className="para"> Identity</p>
                       <p  className="para"> Investments</p>
                       <p  className="para"> Assets</p>
                       <p  className="para"> Liabilities</p>
                       <p  className="para"> Income</p>
                           <span className="line"></span>
                     <Link to="/Contact"><h5>Request Access</h5></Link>
           
                     </div>

                     <div className="col-sm-12 col-sm-4 price-card">
                       <div className="txt">
                       <h4>Basic Plan</h4>
                        <p id="txt-p">Launch your project with unlimited requests and no contractual minimums</p>
                   <span className="number">$249</span>
                       </div>
                       <p id="chk" className="para"> Transactions</p>
                       <p id="chk" className="para"> Auth</p>
                       <p  id="chk" className="para"> Identity</p>
                       <p  className="para"> Investments</p>
                       <p  className="para"> Assets</p>
                       <p  className="para"> Liabilities</p>
                       <p  className="para"> Income</p>
                           <span className="line"></span>
                     <Link to="/Contact"><h5>Request Access</h5></Link>
           
                     </div>

                     <div className="col-sm-12 col-sm-4 price-card">
                       <div className="txt">
                       <h4>Free Plan</h4>
                        <p id="txt-p">Build and test using our core set of products with up to 100 API requests</p>
                   <span className="number">$0.00</span>
                       </div>
                       <p id="chk" className="para"> Transactions</p>
                       <p id="chk" className="para"> Auth</p>
                       <p  id="chk" className="para"> Identity</p>
                       <p id="chk" className="para"> Investments</p>
                       <p id="chk" className="para"> Assets</p>
                       <p id="chk" className="para"> Liabilities</p>
                       <p id="chk" className="para"> Income</p>
                           <span className="line"></span>
                     <Link to="/Contact"><h5>Request Access</h5></Link>
           
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing
