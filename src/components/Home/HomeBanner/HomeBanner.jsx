// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomeBanner.css'
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
const HomeBanner = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Image src="https://i.ibb.co/NZvT91G/cafe-3537801-480.jpg" className='w-5 mx-auto pt-5' fluid />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mx-auto mt-5'>
                        <h1 className='heading'>Experimenting with new recipes <br /></h1>
                        <h4><span className='color'>and when they turn out delicious, makes me so happy</span></h4>
                        <p className='paragraph'>Discover tens of thousands of employment options with the <br /> necessary knowledge. It is the future you. Locate <br /> it here. Manage every aspect of your job application process.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default HomeBanner;
