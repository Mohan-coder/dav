import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import card_img from '../../../images/cards.png'
import product_img from '../../../images/bottle.png'
import { ErrorMessage, useFormik } from "formik";
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, 'Too Short!').required('First Name is required'),
    lastName: Yup.string().min(3, 'Too Short!').required('Last Name is required'),
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().nullable().required('Country is required'),
    state: Yup.string().nullable().required('State is required'),
    zip: Yup.number().required('ZIP Code is required'),
    phone: Yup.number().required('Phone number is required'),
    email: Yup.string().test('email', (emailRegex) => {
        return emailRegex = `${/^[a-z0-9-_\.]+@[a-z0-9-_]+\.[a-z]{2,}(?:\.[a-z]{2,})?$/}`;
    }).required('correct email is required'),
    cc_type: Yup.string().nullable().required('Card type is required'),
    cc_number: Yup.number().nullable().min(10, 'Too Short!').required('Card Number is required'),
    expmonth: Yup.string().nullable().required('Expiry Month is required'),
    expyear: Yup.string().required('Expiry Year is required'),
    cc_cvv: Yup.number().required('CVV is required'),
    agreeCheckbox: Yup.boolean().isTrue('Checkbox is required to place your order').required("Checkbox is required"),
    // sizes: Yup.string().when('colors', {
    //     is: (value) => Boolean(value),
    //     then: Yup.string().required,
    //     otherwise: Yup.string().nullable(),
    // }),
});

const Checkout = ({ radioValue }) => {
console.log(radioValue + "in checkout page")
const quatity =  0;
 
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: null,
            state: null,
            zip: '',
            phone: '',
            email: '',
            cc_type: null,
            cc_number: '',
            expmonth: null,
            expyear: null,
            cc_cvv: '',
            agreeCheckbox: false
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log(values);
            console.log("fill the form....")
            navigate('/thank-you-customer_id=1124016')
        },
    });
    console.log(formik.values)
    const cardTypes = [
        { type: "visa", name: "Visa" },
        { type: "mastercard", name: "Master Card" },
        { type: "maestro", name: "Maestro" },
        { type: "amex", name: "American Express" },
        { type: "discover", name: "Discover" },
        { type: "jcb", name: "JCB" },
        { type: "solo", name: "Solo" },
        { type: "visa_electron", name: "Visa Electron" }
    ];

    return (

        <div>
            <div className="breadcrumb-area bg-12 text-center">
                <div className="container">
                    <h1>Checkout</h1>
                    <nav aria-label="breadcrumb">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* <!-- coupon-area start --> */}
            <div class="coupon-area pt-110">

            </div>
            {/* <!-- coupon-area end --> */}
            {/* <!-- checkout-area start --> */}
            <div>
            <div className="checkout-area pb-90">
                <div className="container">
                    <form name="OfferPageForm" ng-submit="landingOfferPageSubmitHandler($event)" onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="checkbox-form">
                                    <h3>Shipping Details</h3>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="country-select">
                                                <label>Country <span className="required">*</span></label>
                                                <select ng-model="FullFormData.country"
                                                    ng-options="countryData.country_code as countryData.country_name for countryData in countriesData"
                                                    name="country"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.country} >
                                                    <option value="">Select Country</option>
                                                    <option label="United States" value="string:US">United States</option>
                                                </select>
                                                {formik.touched.country && formik.errors.country ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.country}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>First Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" ng-model="FullFormData.firstName"
                                                    name="firstName"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.firstName} />

                                                {formik.touched.firstName && formik.errors.firstName ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.firstName}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>Last Name <span className="required">*</span></label>
                                                <input type="text" placeholder="" ng-model="FullFormData.lastName"
                                                    name="lastName"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.lastName} />
                                                {formik.touched.lastName && formik.errors.lastName ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.lastName}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout-form-list">
                                                <label>Address <span className="required">*</span></label>
                                                <input type="text" placeholder="Street address" ng-model="FullFormData.address"
                                                    name="address"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.address} />
                                                {formik.touched.address && formik.errors.address ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.address}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout-form-list">
                                                <label>Town / City <span className="required">*</span></label>
                                                <input type="text" placeholder="Town / City" ng-model="FullFormData.city"
                                                    name="city"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.city} />
                                                {formik.touched.city && formik.errors.city ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.city}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="country-select">
                                                <label>State <span className="required">*</span></label>
                                                <select ng-model="FullFormData.state"
                                                    ng-options="stateData.state_code as stateData.state_name for stateData in statesData"
                                                    className="ng-pristine ng-valid ng-touched"
                                                    name="state"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.state}>
                                                    <option value="" className="" defaultValue={'select'}
                                                    >Select State</option>
                                                    {formik.values.country === 'string:US' ? <>
                                                        <option label="Alabama" value="string:AL">Alabama</option>
                                                        <option label="Alaska" value="string:AK">Alaska</option>
                                                        <option label="Arizona" value="string:AZ">Arizona</option>
                                                        <option label="Arkansas" value="string:AR">Arkansas</option>
                                                        <option label="California" value="string:CA">California</option>
                                                        <option label="Colorado" value="string:CO">Colorado</option>
                                                        <option label="Connecticut" value="string:CT">Connecticut</option>
                                                        <option label="Delaware" value="string:DE">Delaware</option>
                                                        <option label="Florida" value="string:FL">Florida</option>
                                                        <option label="Georgia" value="string:GA">Georgia</option>
                                                        <option label="Hawaii" value="string:HI">Hawaii</option>
                                                        <option label="Idaho" value="string:ID">Idaho</option>
                                                        <option label="Illinois" value="string:IL">Illinois</option>
                                                        <option label="Indiana" value="string:IN">Indiana</option>
                                                        <option label="Iowa" value="string:IA">Iowa</option>
                                                        <option label="Kansas" value="string:KS">Kansas</option>
                                                        <option label="Kentucky" value="string:KY">Kentucky</option>
                                                        <option label="Louisiana" value="string:LA">Louisiana</option>
                                                        <option label="Maine" value="string:ME">Maine</option>
                                                        <option label="Maryland" value="string:MD">Maryland</option>
                                                        <option label="Massachusetts" value="string:MA">Massachusetts</option>
                                                        <option label="Michigan" value="string:MI">Michigan</option>
                                                        <option label="Minnesota" value="string:MN">Minnesota</option>
                                                        <option label="Mississippi" value="string:MS">Mississippi</option>
                                                        <option label="Missouri" value="string:MO">Missouri</option>
                                                        <option label="Montana" value="string:MT">Montana</option>
                                                        <option label="Nebraska" value="string:NE">Nebraska</option>
                                                        <option label="Nevada" value="string:NV">Nevada</option>
                                                        <option label="New Hampshire" value="string:NH">New Hampshire</option>
                                                        <option label="New Jersey" value="string:NJ">New Jersey</option>
                                                        <option label="New Mexico" value="string:NM">New Mexico</option>
                                                        <option label="New York" value="string:NY">New York</option>
                                                        <option label="North Carolina" value="string:NC">North Carolina</option>
                                                        <option label="North Dakota" value="string:ND">North Dakota</option>
                                                        <option label="Ohio" value="string:OH">Ohio</option>
                                                        <option label="Oklahoma" value="string:OK">Oklahoma</option>
                                                        <option label="Oregon" value="string:OR">Oregon</option>
                                                        <option label="Pennsylvania" value="string:PA">Pennsylvania</option>
                                                        <option label="Rhode Island" value="string:RI">Rhode Island</option>
                                                        <option label="South Carolina" value="string:SC">South Carolina</option>
                                                        <option label="South Dakota" value="string:SD">South Dakota</option>
                                                        <option label="Tennessee" value="string:TN">Tennessee</option>
                                                        <option label="Texas" value="string:TX">Texas</option>
                                                        <option label="Utah" value="string:UT">Utah</option>
                                                        <option label="Vermont" value="string:VT">Vermont</option>
                                                        <option label="Virginia" value="string:VA">Virginia</option>
                                                        <option label="Washington" value="string:WA">Washington</option>
                                                        <option label="West Virginia" value="string:WV">West Virginia</option>
                                                        <option label="Wisconsin" value="string:WI">Wisconsin</option>
                                                        <option label="Wyoming" value="string:WY">Wyoming</option> </> : <option label="N/A" value="">N/A</option>
                                                    } </select>
                                                {formik.touched.state && formik.errors.state ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.state}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>Postcode / Zip <span className="required">*</span></label>
                                                <input type="text" maxLength="6" placeholder="Postcode / Zip" ng-model="FullFormData.zip"
                                                    restrict-input="^[0-9-]*$" name="zip"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.zip} />
                                                {formik.touched.zip && formik.errors.zip ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.zip}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>Email Address <span className="required">*</span></label>
                                                <input type="email" placeholder="" ng-model="FullFormData.email"
                                                    name="email"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.email} />
                                                {formik.touched.email && formik.errors.email ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.email}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>Phone <span className="required">*</span></label>
                                                <input type="text" maxLength="10" placeholder="Phone" ng-model="FullFormData.phone"
                                                    restrict-input="^[0-9-]*$"
                                                    name="phone"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.phone} />
                                                {formik.touched.phone && formik.errors.phone ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.phone}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                    <h3>Billing Details</h3>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <Link to="./">
                                                <img src={card_img} alt="" style={{ width: '120px' }} />
                                            </Link>
                                            <div className="country-select">
                                                <label>Payment Method <span className="required">*</span></label>
                                                <select ng-model="FullFormData.cc_type" ng-options="cardType.type as cardType.name for cardType in cardTypes"
                                                    className="ng-pristine ng-untouched ng-valid"
                                                    name="cc_type"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.cc_type} >
                                                    <option value="" className="" defaultValue="defaultValue">Select Payment Method</option>
                                                    <option label="Visa" value="string:visa">Visa</option>
                                                    <option label="Master Card" value="string:mastercard">Master Card</option>
                                                    <option label="Discover" value="string:discover">Discover</option>
                                                </select>
                                                {formik.touched.cc_type && formik.errors.cc_type ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.cc_type}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout-form-list">
                                                <label>Card # <span className="required">*</span></label>
                                                <input type="text" placeholder="" autoComplete="off" name="cc_number"
                                                    ng-model="FullFormData.cc_number" maxLength="16" restrict-input="^[0-9-]*$"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.cc_number} />
                                                {formik.touched.cc_number && formik.errors.cc_number ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.cc_number}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="country-select">
                                                <label>Month <span className="required">*</span></label>
                                                <select ng-model="FullFormData.expmonth"
                                                    ng-options="monthData.month_num as monthData.month_name for monthData in monthsData"
                                                    className="ng-pristine ng-valid ng-touched" name="expmonth"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.expmonth} >
                                                    <option value="" className="" defaultValue="selected">Month</option>
                                                    <option label="(01) January" value="string:01">(01) January</option>
                                                    <option label="(02) February" value="string:02">(02) February</option>
                                                    <option label="(03) March" value="string:03">(03) March</option>
                                                    <option label="(04) April" value="string:04">(04) April</option>
                                                    <option label="(05) May" value="string:05">(05) May</option>
                                                    <option label="(06) June" value="string:06">(06) June</option>
                                                    <option label="(07) July" value="string:07">(07) July</option>
                                                    <option label="(08) August" value="string:08">(08) August</option>
                                                    <option label="(09) September" value="string:09">(09) September</option>
                                                    <option label="(10) October" value="string:10">(10) October</option>
                                                    <option label="(11) November" value="string:11">(11) November</option>
                                                    <option label="(12) December" value="string:12">(12) December</option>
                                                </select>
                                                {formik.touched.expmonth && formik.errors.expmonth ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.expmonth}</div>
                                                ) : null}
                                            </div>
                                            <div className="country-select">
                                                <label>Year <span className="required">*</span></label>
                                                <select ng-model="FullFormData.expyear" ng-options="yearData.year_num as yearData.year_name for yearData in yearsData"
                                                    data-card-years="20" className="ng-pristine ng-valid ng-touched"
                                                    name="expyear"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.expyear} >
                                                    <option value="" className="" defaultValue="selected">Year</option>
                                                    <option label="2023" value="string:23">2023</option>
                                                    <option label="2024" value="string:24">2024</option>
                                                    <option label="2025" value="string:25">2025</option>
                                                    <option label="2026" value="string:26">2026</option>
                                                    <option label="2027" value="string:27">2027</option>
                                                    <option label="2028" value="string:28">2028</option>
                                                    <option label="2029" value="string:29">2029</option>
                                                    <option label="2030" value="string:30">2030</option>
                                                    <option label="2031" value="string:31">2031</option>
                                                    <option label="2032" value="string:32">2032</option>
                                                    <option label="2033" value="string:33">2033</option>
                                                    <option label="2034" value="string:34">2034</option>
                                                    <option label="2035" value="string:35">2035</option>
                                                    <option label="2036" value="string:36">2036</option>
                                                    <option label="2037" value="string:37">2037</option>
                                                    <option label="2038" value="string:38">2038</option>
                                                    <option label="2039" value="string:39">2039</option>
                                                    <option label="2040" value="string:40">2040</option>
                                                    <option label="2041" value="string:41">2041</option>
                                                    <option label="2042" value="string:42">2042</option>
                                                    <option label="2043" value="string:43">2043</option>
                                                </select>
                                                {formik.touched.expyear && formik.errors.expyear ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.expyear}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout-form-list">
                                                <label>CVV/CV2: <span className="required">*</span></label>
                                                <input type="text" maxLength="3" name="cc_cvv" autoComplete="off" ng-model="FullFormData.cvv"
                                                    restrict-input="^[0-9-]*$"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    values={formik.values.cc_cvv} />
                                                {formik.touched.cc_cvv && formik.errors.cc_cvv ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.cc_cvv}</div>
                                                ) : null}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="checkout-form-list create-acc">
                                                <p error={!!formik.errors.agreeCheckbox}> </p>
                                                <input
                                                    type='checkbox'
                                                    id="cbox" style={{ height: 'inherit' }}
                                                    name="agreeCheckbox"
                                                    value={formik.values.agreeCheckbox}
                                                    onChange={formik.handleChange}
                                                />
                                                {formik.touched.agreeCheckbox && formik.errors.agreeCheckbox ? (
                                                    <div style={{ color: 'red' }} >{formik.errors.agreeCheckbox}</div>
                                                ) : null}
                                                <label for="cbox" ng-if="cart['main_product']['productRecurring'] == 1">
                                                    I am at least 18 years of age and agree to the <Link  to="/terms"
                                                        style={{ color: '#116977' }}>Terms and conditions</Link> & <Link  to="/privacy"
                                                            style={{ color: '#116977' }}>Privacy policy</Link>
                                                    By clicking the Order Now button and submitting this order, I agree that my card will be charged
                                                    $19.93. If this product is not right for me, or I have any questions, contact customer service
                                                    with any questions by calling 800-352-5567 or e-mailing info@ultrabeautycare.org. Charges will
                                                    appear on my credit card statements as 8003525567ultrabeautyc. Standard shipping orders will be
                                                    processed and shipped with USPS within about 1 business day. Shipping time is estimated to be 5-7
                                                    business days from when your order ships out. Thank you for your business.
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                    <style>{` .checkout-area form .payment-method .order-button-payment input{
                                            cursor: pointer;
                                        width: 100%;
                                        font-size: 17px;
                                        letter-spacing: .5px;
                                        margin-top: 20px;
                                        color: #ffffff;
                                        background: #b366b6;
                                        clip-path: polygon(0% 0%, 95% 0, 100% 50%, 95% 100%, 0% 100%);
                                        border: 0px; }
                                        `} </style>
                                    <div className="payment-method">

                                        <div className="order-button-payment">
                                            <input className="default-btn" type="submit" value="Place order" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <div className="your-order">
                                    <h3>Your order</h3>
                                    <div className="your-order-table table-responsive">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="product-name text-left">Product</th>
                                                    <th className="product-total text-right">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="cart_item" ng-repeat="(key, item) in cart">
                                                    <td className="product-name text-left" style={{ display: 'flex', alignItems: 'center' }}>
                                                        <img src={product_img} style={{ width: '15%' }} /><br />
                                                        <span style={{ fontSize: '17px' }} id="terms">
                                                            {/* {{ item['productName']}} */} 
                                                            {radioValue === "1 Bottle Skin Serum (30ML) $19.93" ? '1': '2'} Bottle Skin Serum (30ML)
                                                        </span><br /><br />
                                                    </td>
                                                    <td className="product-total text-right">
                                                        <span className="amount">
                                                            {/*  `${{ item['productPrice']}}` */}{radioValue === "1 Bottle Skin Serum (30ML) $19.93" ? '$19.93': '$29.93'}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr className="shipping text-left">
                                                    <th className=" text-left">Shipping</th>
                                                    <td>
                                                        <ul>
                                                            <li>
                                                                <label>
                                                                    $0.00
                                                                </label>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr className="order-total">
                                                    <th className=" text-left">Order Total</th>
                                                    <td>
                                                        <strong><span className="amount text-right">
                                                            {/*  `${{ getCartTotal() }}` */}{radioValue === "1 Bottle Skin Serum (30ML) $19.93" ? '$19.93': '$29.93'}
                                                        </span></strong>
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
            {/* <!-- checkout-area end --> */}
        </div>
    )
}

export default Checkout