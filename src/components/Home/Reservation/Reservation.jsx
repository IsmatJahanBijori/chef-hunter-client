// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Lottie from "lottie-react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import food from '../../../assets/food.json'
const Reservation = () => {
    return (
        <Container className='my-5 d-flex'>
            <h1 className='text-center mx-auto' style={{ fontFamily: 'Manrope', fontWeight: 'bold', marginLeft:'50px' }}>Reservation</h1>
            <Row>
                <Col sm={1} md={4}>
                    <div className='mt-5 ms-0'>
                        <Lottie animationData={food} loop={true} style={{ height: '500px' }} />
                    </div>
                </Col>

                <Col sm={1} md={4} className='mt-5'>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                    </InputGroup>

                    <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/users/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                    </InputGroup>

                    <InputGroup>
                        <InputGroup.Text>With textarea</InputGroup.Text>
                        <Form.Control as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    <Button className='mt-5'>Submit</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Reservation;