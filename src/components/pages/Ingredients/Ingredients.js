import React from 'react'
import ING_IMG from '../../../images/ing3.png'
const Ingredients = () => {
  return (
    <div >
      <div class="breadcrumb-area bg-12 text-center">
        <div class="container">
          <h1>Ingredients</h1>
          <nav aria-label="breadcrumb">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><a href="./">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Ingredients</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="contact-area fix">
        <div class="contact-address pt-110 pb-100" style={{ background: " #fff" }}>
          <div class="container">
            <center>
              <h4 class="ing-head" style={{ fontFamily: 'sans-serif', fontSize: '25px', fontWeight: '600', marginBottom: '50px' }} >1 Skin serum bottle (30 ml)</h4>
              <img alt="image" src={ING_IMG} />
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ingredients