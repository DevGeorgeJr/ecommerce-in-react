import React, { Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Privacy = () => {
    return (
        <Fragment>
            <Container>
                <Row className="p-2">
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <h4 className="section-title-login">Privacy Page </h4>
                        <div className="section-title-contact">
                            <p>Last updated: </p>
                            <p>At Easy Shop, your privacy is of utmost importance to us. This Privacy Policy document contains types of information that is collected and recorded by [Your Company Name] and how we use it.</p>

                            <h2>Information Collection and Use</h2>
                            <p>For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to:</p>
                            <ul>
                                <li>Your name</li>
                                <li>Contact information, including email address</li>
                                <li>Demographic information such as postcode, preferences, and interests</li>
                                <li>Other information relevant to customer surveys and/or offers</li>
                            </ul>

                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect in various ways, including to:</p>
                            <ul>
                                <li>Provide, operate, and maintain our website</li>
                                <li>Improve, personalize, and expand our website</li>
                                <li>Understand and analyze how you use our website</li>
                                <li>Develop new products, services, features, and functionality</li>
                                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                <li>Send you emails</li>
                                <li>Find and prevent fraud</li>
                            </ul>

                            <h2>Information Sharing</h2>
                            <p>We may share your personal information with the following types of third parties:</p>
                            <ul>
                                <li>Service providers who assist us in operating our website, conducting our business, or serving our users, as long as those parties agree to keep this information confidential</li>
                                <li>Business partners who engage in joint marketing activities</li>
                                <li>When required by law or to protect the rights, property, or safety of [Your Company Name], our users, or others</li>
                            </ul>

                            <h2>Cookies and Tracking Technology</h2>
                            <p>[Your Company Name] uses cookies and similar tracking technologies to track the activity on our Service and hold certain information.</p>
                            <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Other tracking technologies are also used such as beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</p>

                            <h2>Your Privacy Rights</h2>
                            <p>If you are a resident of certain territories, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise these rights, please contact us through the contact information below.</p>

                            <h2>Contact Us</h2>
                            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
                            <ul>
                                <li>Email: [Email Address]</li>
                                <li>Phone: [Phone Number]</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Privacy