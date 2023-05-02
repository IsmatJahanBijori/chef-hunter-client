// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomeBanner.css'
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';

const HomeBanner = () => {

    return (
        //home banner start
        <Container>
            <Row>
                <Col xs={12} md={6}>
                    <Image src="https://i.ibb.co/NZvT91G/cafe-3537801-480.jpg" className='w-5 mx-auto pt-5' fluid />
                </Col>
                <Col xs={12} md={6}>
                    <div className='mx-auto mt-5'>
                        <h1 className='heading'>Experimenting with new<br /></h1>
                        <h4><span className='color'>recipes and when they turn out delicious, makes me so happy</span></h4>
                        <p className='paragraph'>Discover the perfect culinary career for you with our extensive selection of employment opportunities, tailored to match your skills and experience. Whether you are an experienced chef or a budding talent, we have something for everyone. Take control of your career and find your dream job today. Our platform allows you to manage every aspect of your job application process, from resume submission to interviews and beyond. Join our community of culinary professionals and unlock your full potential.
                        </p>
                    </div>
                </Col>
            </Row>
            {/*home banner end */}
        </Container>




    );
};

export default HomeBanner;
{/**
 */}