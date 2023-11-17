import React from 'react'
import '../../../styles/style2.css'

const Orderstatus = () => {
    return (
        <div>
            <section class="order_details section-margin--small">
                <div class="container">
                    {/* <!--        <p class="text-center billing-alert">Thank you for your orders</p>--> */}
                    <p class="text-center billing-alert">Your order ID is : 1124016</p>

                    <div class="order_details_table">
                        <h2 style={{textAlign: "center"}}>Unfortunately, Your Order Cannot Be Processed.</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Orderstatus;