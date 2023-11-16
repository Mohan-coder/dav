import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer class="footer-area footer-style-two">
        {/* <!-- Footer Top Area Start --> */}
        <div class="footer-top bg-9">
            {/* <!-- Footer Widget Area Start --> */}
            <div class="footer-widget-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <center>
                                <div class="foot" id="quick-links">
                                    <p><Link to={"ingredients"} target="_blank" rel='noopener noreferrer'>Ingredients</Link></p>
                                    <p><Link to={"terms"} target="_blank" rel='noopener noreferrer'>Terms &amp; Conditions</Link></p>
                                    <p><Link to={"privacy"} target="_blank" rel='noopener noreferrer'>Privacy Policy</Link></p>
                                    <p> <Link to={"contact"} target="_blank" rel='noopener noreferrer'>Contact</Link> </p>
                                    {/* <!-- <p><a href="cancelletion" target="_blank">Cancel Order</a></p> --> */}
                                </div>
                            </center>
                            <div class="copy-right">
                                <p> Phone no : 800-352-5567<br/> Email : info@ultrabeautycare.org<br/> Corp Address : 1301 Polk City Rd Lot 78, Haines City, FL 33844 <br/> Return Address : 1025 Industry Road, Harrodsburg, KY 40330, USA 
                                </p>
                                <p>© Copyright 2023 Joyful Peak LLC. All rights reserved.<br/>
                                    {/* <!----> */}
                                </p>
                                <p>
                                    These statements have not been evaluated by the Food and Drug Administration.<br/> These products are not intended to diagnose, treat, cure, or prevent any disease. Read the entire label before use.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer Widget Area End --> */}
        </div>
        {/* <!-- Footer Top Area End --> */}
        {/* <!-- Footer Bottom Area Start --> */}
        {/* <!-- Footer Bottom Area End --> */}
    </footer>
    </div>
  )
}

export default Footer