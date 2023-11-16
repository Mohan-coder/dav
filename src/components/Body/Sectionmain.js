import React from "react";
import hero_section_img from "../../images/hero_bg_1.jpg";
import { Link } from "react-router-dom";

const Sectionmain = () => {
   return (
      <div>
         <div
            class="site-blocks-cover overlay"
            style={{ backgroundImage: `url(${hero_section_img})` }}>
            <div class="container">
               <div class="row align-items-center justify-content-left text-left">
                  <div class="col-md-8">
                     <div class="row justify-content-left mb-4">
                        <div class="col-md-10 text-left">
                           {/* <!-- <p data-aos="fade-up" data-aos-delay="100">Customer Support : </p> --> */}
                           <h1 data-aos="fade-up" class="mb-5 aos-init aos-animate">
                              <br />
                              <span class="typed-words">
                                 Harness the Power of our Skin Serum
                              </span>
                           </h1>
                           <p
                              data-aos="fade-up"
                              data-aos-delay="100"
                              class="aos-init aos-animate"
                           >
                              The Ultra Beauty Care may prevent your skin from looking
                              unhealthy from the very beginning.
                           </p>
                           <p
                              data-aos="fade-up"
                              data-aos-delay="100"
                              class="aos-init aos-animate"
                           >
                              <Link to="/product" class="btn btn-primary btn-pill">
                                 <span>Order Now</span>
                              </Link>
                           </p>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-4"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sectionmain;
