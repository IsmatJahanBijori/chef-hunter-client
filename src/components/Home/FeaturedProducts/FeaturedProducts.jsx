// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
const FeaturedProducts = () => {
    return (
        <Container className='my-5'>
            <div className='d-flex'>
                <h1 className='text-center mx-auto'>Featured Recipe</h1>
            </div>
            <Row className='gap-5 me-5'>
                <Col sm={1} md={3}>
                    <Card style={{ width: '25rem', marginTop: '90px' }}>
                        <Card.Img variant="top" src="https://i.ibb.co/fpXcHfh/flatlay-iron-skillet-with-meat-and-other-food.jpg" />
                        <Card.Body>
                            <Card.Title>Set Menu 1</Card.Title>
                            <Card.Text>
                                Special Steak
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={1} md={3}>
                    <Card style={{ width: '25rem', marginTop: '90px' }}>
                        <Card.Img variant="top" src="https://i.ibb.co/kBCxh1x/images.jpg" />
                        <Card.Body>
                            <Card.Title>Set Menu 2</Card.Title>
                            <Card.Text>
                                Rice Bowl
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

                <Col sm={1} md={3}>
                    <Card style={{ width: '25rem', marginTop: '90px' }}>
                        <Card.Img variant="top" src="https://i.ibb.co/x88Cmhd/indian-food-curry-butter-chicken-260nw-1304901667.webp" alt="indian-food-curry-butter-chicken-260nw-1304901667" />
                        <Card.Body>
                            <Card.Title>Set Menu 3</Card.Title>
                            <Card.Text>
                                Special Protein Salad
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
export default FeaturedProducts;