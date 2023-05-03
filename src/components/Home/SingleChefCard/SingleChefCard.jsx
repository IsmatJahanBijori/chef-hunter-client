/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SingleChefCard = ({ chef }) => {
    // eslint-disable-next-line react/prop-types
    console.log(chef)
    // eslint-disable-next-line react/prop-types
    const { id, picture, name, experience, numberOfRecipes, likes } = chef
    return (
        <Container>

            <Card style={{ width: '20rem', marginTop: '90px', backgroundColor: '#FDF2F9' }} className='text-start p-4'>
                <Card.Img style={{ width: '200px', marginLeft: '20px' }} variant="top" src={picture} />
                <Card.Title style={{ marginLeft: '20px', marginTop: '10px' }}>{name}</Card.Title>
                <Card.Body className='mt-3' style={{ fontFamily: 'Manrope', fontSize: '20px' }}>
                    <Card.Text><span className='fw-bold'>Experience:</span> {experience}</Card.Text>
                    <Card.Text><span className='fw-bold'>Numbers of Recipes:</span> {numberOfRecipes}</Card.Text>
                    <Card.Text><span className='fw-bold'>Likes:</span> {likes}</Card.Text>
                    <Link to={``}><Button>View Recipe</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default SingleChefCard;
