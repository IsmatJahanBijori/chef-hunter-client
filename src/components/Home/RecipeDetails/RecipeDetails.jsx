/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const RecipeDetails = ({ recipe }) => {
    // eslint-disable-next-line react/prop-types
    const { name, ingredients, cooking_method, rating } = recipe[0]
    // console.log(name)
    return (

        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{cooking_method}</Card.Text>
                <Card.Text>{rating}</Card.Text>
            </Card.Body>
            <Card.Footer>

            </Card.Footer>
        </Card>

    );
};

export default RecipeDetails;