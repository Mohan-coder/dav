import React from 'react'
import card_img from '../../../images/cards.png'

const Contact = () => {
  return (
    <div color='green' style={{ fontSize: '2em' }}>
      <div class="breadcrumb-area bg-12 text-center">
        <div class="container">
          <h1>Contact</h1>
          <nav aria-label="breadcrumb">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Contact</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="contact-area fix">
        <div class="contact-address pt-110 pb-100">
          <div class="container">

            <h1 class="contact-title">CONTACT US</h1>
            <p>
              Thank you for visiting Ultra Beauty Care. We're excited to Serve You!
            </p>
            <div class="contact-info">
              <div class="contact-list-wrapper">
                <div class="contact-list">
                  <span>Company Name : Joyful Peak LLC</span>
                </div>
                <div class="contact-list">
                  <span>Address : 1301 Polk City Rd Lot 78, Haines City, FL 33844

                  </span>
                </div>
                <div class="contact-list">
                  <span>Email : info@ultrabeautycare.org</span>
                </div>
                <div class="contact-list">
                  <span>Phone Number : 800-352-5567</span>
                </div>
                <div class="contact-list">
                  <span>Return Address: 1025 Industry Road, Harrodsburg, KY 40330, USA </span>
                </div>
                <div class="contact-list">
                  <span>Acceptable Cards: <img src={card_img} alt="" style={{width:'120px'}} /></span><br />
                </div>
                <div class="contact-list">
                  <p>
                    Shipment via USPS typically takes 5 to 7 business days.
                  </p>
                </div>
              </div>
            </div>
            <div class="working-time">
              <h2>Working hours</h2>
              <span><span>Monday To Friday:</span>  9 AM - 5 PM EST</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact