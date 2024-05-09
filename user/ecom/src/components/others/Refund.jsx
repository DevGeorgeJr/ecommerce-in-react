import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Refund = () => {
    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <h4 className="section-title-login">Refund Page </h4>
                        <div className="section-title-contact">
                            <h2>Our Commitment to Satisfaction</h2>
                            <p>We at Easy Shop are committed to your satisfaction. If you are not satisfied with your purchase, you may be eligible for a refund subject to the following guidelines:</p>

                            <h2>Refund Eligibility</h2>
                            <ul>
                                <li><strong>Time Frame:</strong> Refunds can be requested within 30 days of the delivery date.</li>
                                <li><strong>Condition of Goods:</strong> Products must be returned in their original condition and packaging. Used, damaged, or altered items may not be eligible for a refund.</li>
                                <li><strong>Proof of Purchase:</strong> A valid receipt or order number is required for all refund requests.</li>
                            </ul>

                            <h2>Non-Refundable Items</h2>
                            <p>The following items cannot be returned or refunded:</p>
                            <ul>
                                <li>Customized or personalized goods</li>
                                <li>Digital products or services once accessed or downloaded</li>
                                <li>Gift cards</li>
                                <li>Perishable goods such as food, flowers, or plants</li>
                            </ul>

                            <h2>How to Request a Refund</h2>
                            <ol>
                                <li><strong>Contact Us:</strong> Reach out to our support team via [Contact Information] to initiate a refund request. Please provide your order number and the reason for the return.</li>
                                <li><strong>Return the Product:</strong> After approval, send the product back to our return address. Customers are responsible for return shipping costs unless the return is due to a defect or incorrect product.</li>
                                <li><strong>Receive Your Refund:</strong> Once we receive and inspect the returned item, we will process your refund. Refunds are issued to the original method of payment and typically take [number of days] days to process.</li>
                            </ol>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Refund