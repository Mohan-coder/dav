import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bottle_img from '../../../images/bottle.png'
import travel_img from '../../../images/travel.png'
import '../../../styles/style2.css'

const Product = ({radioValue,setradioValue}) => {
  const navigate = useNavigate()
  // const [radioValue, setradioValue] = useState(null)
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setCheckboxChecked(event.target.checked);
  };
  console.log(radioValue)
  const handleCheckout = () => {
    if (radioValue === null) {
      alert("Please choose a product !");
    } else if (radioValue && !checkboxChecked) {
      alert("Please check the box");
    } else {
      navigate('/checkout')
    }
  };
  return (
    <div >
      <div className="breadcrumb-area bg-12 text-center">
        <div className="container">
          <h1>Shop</h1>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="/product">Shop</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="product-detials-area bg-gray pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <div className="product-image-slider d-flex flex-column">
                {/* <!--Product Tab Content Start--> */}
                <div className="onetime-cont">
                  <img
                    className="img-fluid"
                    src={travel_img}
                    style={{ width: '100% !important' }}
                  />
                </div>
                <div className="continuity-cont" style={{ display: 'none' }}>
                  <img
                    className="img-fluid"
                    src={bottle_img}
                    style={{ width: '100% !important' }}
                  />
                </div>
                <div className="additional-cont" style={{ display: 'none' }}>
                  <img className="img-fluid" src="images/makeup-bag.jpg" />
                </div>
                {/* <!--Product Content End--> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-7">
              <div className="product-details-text">
                <h3>Ultra Beauty Care</h3>
                <h4>
                  As this Ultra Beauty Care is made out of topical formula, it may
                  help you gain the best defence for your unhealthy skin. Using
                  this product for your skin may improve it and leave it looking
                  re-energized.
                </h4>
                <input type="radio" value="1 Bottle Skin Serum (30ML) $19.93" id="opt1" name="opt"
                  onChange={(e) => setradioValue(e.target.value)} />{" "}
                <label for="opt1">1 Bottle Skin Serum (30ML) $19.93</label>
                <br />
                <p className="onetime-cont"
                  style={{ display: radioValue === "1 Bottle Skin Serum (30ML) $19.93" ? 'block' : 'none' }}   >
                  <input
                    id="cbox"
                    style={{ height: 'inherit' }}
                    type="checkbox"
                    name="agreeCheckbox"
                    ng-model="FullFormData.agreeCheckbox"
                    className="ng-pristine ng-untouched ng-valid"
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                  />
                  I am at least 18 years of age and agree to the{" "}
                  <Link  to="/terms" style={{ color: '#116977' }}>
                    Terms and conditions
                  </Link>{" "}
                  &amp;{" "}
                  <Link  to="/privacy" style={{ color: '#116977' }}>
                    Privacy policy
                  </Link>
                  By clicking the Add to Cart button and submitting this order, I
                  agree that my card will be charged $19.93. If this product is
                  not right for me, or I have any questions, contact customer
                  service with any questions by calling 800-352-5567 or e-mailing
                  info@ultrabeautycare.org. Charges will appear on my credit card
                  statements as 8003525567ultrabeautyc. Standard shipping orders
                  will be processed and shipped with USPS within about 1 business
                  day. Shipping time is estimated to be 5-7 business days from
                  when your order ships out. Thank you for your business.
                  {/* <!-- I will be subjected to a one-time charge that is $19.93 for the purchase of Ultra Beauty Care Travel Size bottle. The standard ground mail service is shipped via United States Postal Service First Class Mail. Packages will arrive within 3-5 business days. Please be advised that shipments are not sent out on Saturdays, Sundays, or any holidays. We do not guarantee arrival dates or times. This charge will appear on your billing statement as 8003525567ultrabeautyc --> */}
                </p>
                <br />
                <input type="radio" value="2 Bottle Skin Serum (30ML) $29.93" id="opt2" name="opt" onChange={(e) => setradioValue(e.target.value)} />{" "}
                <label for="opt2"> 2 Bottle Skin Serum (30ML) $29.93 </label>
                <br />
                <p className="continuity-cont" style={{ display: radioValue === "2 Bottle Skin Serum (30ML) $29.93" ? 'block' : 'none' }}>
                  <input
                    id="cbox"
                    style={{ height: 'inherit' }}
                    type="checkbox"
                    name="agreeCheckbox"
                    ng-model="FullFormData.agreeCheckbox"
                    className="ng-pristine ng-untouched ng-valid"
                    checked={checkboxChecked}
                    onChange={handleCheckboxChange}
                  />
                  {/* <!-- I am at least 18 years of age and agree to the<Link  to="terms" style="color:#116977;" >Terms and conditions</Link> &<Link  to="privacy" style="color:#116977;" >Privacy policy</Link>. By clicking the Order Now button and submitting this order, I agree that my card will be charged $29.93. If this product is not right for me, or I have any questions, contact customer service with any questions by calling 800-352-5567 or e-mailing info@ultrabeautycare.org. Charges will appear on my credit card statements as 8003525567ultrabeautyc. Standard shipping orders will be processed and shipped with USPS within about 1 business day. Shipping time is estimated to be 5-7 business days from when your order ships out.  Thank you for your business.<br/><br/> --> */}
                  I am at least 18 years of age and agree to the{" "}
                  <Link  to="/terms" style={{ color: '#116977' }}>
                    Terms and conditions
                  </Link>{" "}
                  &amp;{" "}
                  <Link  to="/privacy" style={{ color: '#116977' }}>
                    Privacy policy
                  </Link>
                  . By clicking the Add to Cart button and submitting this order,
                  I agree to be billed $29.93. Standard shipping orders will be
                  processed and shipped with USPS within about 1 business day.
                  Shipping time is estimated to be 5-7 business days from when
                  your order ships out. If our product is not right for you,
                  simply call 800-352-5567 or contact us via email at
                  info@ultrabeautycare.org to cancel your order. This charge will
                  appear on your billing statement as 8003525567ultrabeautyc.
                  {/* <!-- I agree to be billed $29.93  today and every 30 days from this initial order date. I will receive a  Regular Size bottle of Ultra Beauty Care in 3-5 business days and every 30 days after. Membership program up to 12 months . The standard ground mail service is shipped via United States Postal Service First Class Mail. Packages will arrive within 3-5 business days. Please be advised that shipments are not sent out on Saturdays, Sundays, or any holidays. We do not guarantee arrival dates or times. This charge will appear on your billing statement as 8003525567ultrabeautyc. --> */}
                </p>
                <br />
                <br />
                <Link
                  className="btn_2 nav_string default-btn btnn"
                  onClick={handleCheckout}
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
