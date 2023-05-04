// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
// import RecipeDetails from '../RecipeDetails/RecipeDetails';

const ChefsRecipe = () => {

    const chefsInfo = useLoaderData()

    return (
        <Container>
        {/*Banner Design */}
            <Card className='mt-5 p-5'>
                <Card.Img style={{ width: "1200px", height: '800px' }} variant="top" src={chefsInfo.picture} />
                <Card.Body style={{ fontFamily: 'Manrope', fontSize: '30px' }}>
                    <Card.Text>{chefsInfo.name}</Card.Text>
                    <Card.Text style={{ fontFamily: 'Manrope', fontSize: '20px' }}>{chefsInfo.bio}</Card.Text>
                    <Card.Text>Experience: {chefsInfo.experience}</Card.Text>
                    <Card.Text>Numbers of Recipes:: {chefsInfo.numberOfRecipes}</Card.Text>
                    <Card.Text>Likes: {chefsInfo.likes}</Card.Text>
                </Card.Body>
            </Card>
            {chefsInfo.recipes.map(recipe => <RecipeDetails key={recipe.recipes_id} recipe={recipe}></RecipeDetails>)}
        </Container>
    );
}
export default ChefsRecipe;
