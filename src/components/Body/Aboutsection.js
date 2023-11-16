import React from 'react'
import about_img from '../../images/img_1.jpg'
import { Link } from 'react-router-dom'

const Aboutsection = () => {
  return (
    <div>
        <div class="about-sec">
          <div class="container">
              <div class="row">
                  <div class="col-lg-6 col-md-6 col-sm-12">
                      <img style={{width: '100%'}} src={about_img} alt="Image"/>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12">
                      <h3 style={{paddingTop: '70px'}} class="mb-3">Ultra Beauty Care</h3>
                  <p>As this Ultra Beauty Care is made out of topical formula, it may help you gain the best defence for your unhealthy skin. Ultra Beauty Care may also help you in keeping the hydration level of your skin as it might help to improve the overall health of your skin.</p>
                  <p><Link to="/product" class="d-inline-flex align-items-center block-service-1-more btn btn-primary btn-pill"><span>Order Now</span> <span class="icon-keyboard_arrow_right icon"></span></Link></p>
               </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Aboutsection