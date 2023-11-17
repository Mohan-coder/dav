import React from 'react'
import product_img from '../../images/travel.png'
const Productsection = () => {
    return (
        <div>
            <div class="product-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="block-half-content-text">
                                <div class="block-half-content-text-inner">
                                    <h2 class="block-half-content-heading mb-4">How Exactly Ultra Beauty Care Works?</h2>
                                    <div class="block-half-content-excerpt">
                                        <ol>
                                            <li>The Ultra Beauty Care may nurture your skin.</li>
                                            <li>It may Improve the appearance of your skin.</li>
                                            <li>It may leave your skin nourished.</li>
                                        </ol>
                                        {/* <!-- <p class="lead">The Ultra Beauty Care may nurture your skin it may Improve the appearance of your skin. It may leave your skin nourished.</p> --> */}
                                    </div>
                                </div>
                                <p class="pera-bottom">

                                    <a class="btn btn-outline-white btn-pill" href="product"><span>Order Now</span></a>
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="image-sec">
                                <img src={product_img} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Productsection