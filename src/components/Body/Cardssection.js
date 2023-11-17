import React from 'react'
import cards_img1 from '../../images/ic1.png'
import cards_img2 from '../../images/ic2.png'
import cards_img3 from '../../images/ic3.png'
import cards_img4 from '../../images/ic4.png'
import { Link } from 'react-router-dom'

const Cardssection = () => {
    return (
        <div>
            <section class="feature-sec">
                <div class="container">
                    <div class="row mb-4 text-center background-text d-flex justify-content-center">
                        <h2>We Know what is best for your skin</h2>
                    </div>
                    <br />
                    <div class="row mb-4">
                        <div class="col-xl-3 col-lg-3 col-md-3  ">
                            <div class="support_content wht-box">
                                <Link class="support_icon" to="/product">
                                    <img src={cards_img1} alt="image" />
                                </Link>
                                <div class="support_text">
                                    <h4 style={{ color: '#000' }} >May Hydrate your skin</h4>

                                    <p style={{ color: '#212' }} class="desc">Ultra Beauty Care may help you reduce the appearance of unhealthy skin and leave it nourished.</p>
                                </div>
                            </div>

                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 ">
                            <div class="support_content wht-box">
                                <Link class="support_icon" to="/product">
                                    <img src={cards_img2} alt="image" />

                                </Link>
                                <div class="support_text">
                                    <h4 style={{ color: '#000' }}  >May nurture your skin</h4>
                                    <p style={{ color: '#212' }} class="desc">May nurture your skin Ultra Beauty Care may help reduce the signs of unhealthy skin. It may leave your skin nourished.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 ">
                            <div class="support_content wht-box">
                                <Link class="support_icon" to="/product">
                                    <img src={cards_img3} alt="image" />

                                </Link>
                                <div class="support_text">
                                    <h4 style={{ color: '#000' }}  >May bring you fairer skin</h4>

                                    <p style={{ color: '#212' }} class="desc">Now you may fight your skin dullness, With regular use of this Ultra Beauty Care, you may get the best solution for your dull skin.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-3 ">
                            <div class="support_content wht-box">
                                <Link class="support_icon" to="/product">
                                    <img src={cards_img4} alt="image" />

                                </Link>
                                <div class="support_text">
                                    <h4 style={{ color: ' #000' }}  >May support overall appearance of skin</h4>
                                    <p style={{ color: ' #212' }} class="desc">Ultra Beauty Care may prevent the appearance of unhealthy skin from the very beginning</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </section>
        </div>
    )
}

export default Cardssection