// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (

        <div className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link href='' className='me-4 text-reset'>
                        <FaFacebook style={{ color: '#3B5998' }} />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <FaTwitter style={{ color: '#00ACEE' }} />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <FaInstagram style={{ color: 'red' }} />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <FaGoogle style={{ color: '#DB4437' }}></FaGoogle>
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <FaLinkedin style={{ color: '#0072B1' }} />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <FaGithub style={{ color: '#1a1110' }} />
                    </Link>
                </div>
            </section>

            <section className=''>
                <Container className='text-center text-md-start mt-5'>
                    <Row className='mt-3'>
                        <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Company name</h6>
                            <p>
                                Aurora Master Chef Hunter
                            </p>
                        </Col>

                        <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Legal & Privacy</h6>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Terms and Conditions
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Privacy Policy
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Cookies
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Copyright
                                </Link>
                            </p>
                        </Col>

                        <Col className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Pricing
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Settings
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Orders
                                </Link>
                            </p>
                            <p>
                                <Link href='#!' className='text-reset'>
                                    Help
                                </Link>
                            </p>
                        </Col>

                        <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>

                            </p>
                            <p>

                            </p>
                            <p>

                            </p>
                            <p>

                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className='d-flex pt-5' style={{ height: `calc(100vh-100px)` }}>
                <p className='mx-auto text-info fw-semibold'>© 2023 auroraChef Inc. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;