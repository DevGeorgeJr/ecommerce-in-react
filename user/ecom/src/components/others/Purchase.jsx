import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Purchase = () => {
    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <h4 className="section-title-login">Purchase Page </h4>
                        <div className="section-title-contact">
                            <h1>How to Purchase on Easy Shop</h1>
                            <p>Shopping with us is easy! Follow these simple steps to begin your seamless shopping experience:</p>

                            <h2>Step-by-Step Purchase Guide</h2>
                            <ol>
                                <li><strong>Browse Our Products:</strong> Start by exploring our wide range of products. You can browse by category, search for specific items, or use filters to narrow down your options.</li>
                                <li><strong>Select Your Product:</strong> Once you find your desired product, click on it to view more details, such as descriptions, specifications, pricing, and available offers.</li>
                                <li><strong>Add to Cart:</strong> If you decide to purchase the product, select your desired quantity and click the "Add to Cart" button.</li>
                                <li><strong>Review Your Cart:</strong> Visit your shopping cart by clicking the cart icon at the top right of the page. Here, you can review your items, adjust quantities, or remove items if necessary.</li>
                                <li><strong>Proceed to Checkout:</strong> Once you're ready to purchase, click "Proceed to Checkout." If you are not logged in, you will be prompted to log in or register an account.</li>
                                <li><strong>Enter Shipping Information:</strong> Provide a shipping address where you want your items delivered. You can also select different shipping options based on how quickly you need your products.</li>
                                <li><strong>Choose Payment Method:</strong> Select a payment method from available options such as credit card, PayPal, or others. Enter your payment details securely.</li>
                                <li><strong>Review and Place Your Order:</strong> Review all the information you've entered, make any necessary adjustments, and then click "Place Your Order" to complete your purchase.</li>
                                <li><strong>Order Confirmation:</strong> You will receive an order confirmation via email with your order details and a tracking number to follow the progress of your shipment.</li>
                            </ol>

                            <h2>Need Help?</h2>
                            <p>If you have any questions or need assistance with your order, please do not hesitate to contact our customer support team. We are available via:</p>
                            <ul>
                                <li>Email: [Email Address]</li>
                                <li>Phone: [Phone Number]</li>
                                <li>Live Chat on our website</li>
                            </ul>

                            <p>Thank you for choosing [Your Company Name]. We hope you enjoy your shopping experience!</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Purchase