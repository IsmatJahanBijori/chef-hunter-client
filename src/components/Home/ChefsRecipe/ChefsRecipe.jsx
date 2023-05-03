// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ChefsRecipe = () => {

    const chefsInfo = useLoaderData()
    // console.log(chefsInfo)
    return (
        <Container>
            <Card className='mt-5 p-5'>
                <Card.Img style={{ width: "1200px", height: '800px'}} variant="top" src={chefsInfo.picture} />
                <Card.Body style={{ fontFamily: 'Manrope', fontSize: '30px' }}>
                    <Card.Text>{chefsInfo.name}</Card.Text>
                    <Card.Text>Experience: {chefsInfo.experience}</Card.Text>
                    <Card.Text>Numbers of Recipes:: {chefsInfo.numberOfRecipes}</Card.Text>
                    <Card.Text>Likes: {chefsInfo.likes}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ChefsRecipe;