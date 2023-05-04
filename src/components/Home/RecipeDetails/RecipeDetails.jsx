/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card } from 'react-bootstrap';
import { GrFavorite } from "react-icons/gr";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from 'react-rating';
// eslint-disable-next-line react/prop-types
const RecipeDetails = ({ recipe }) => {
    // eslint-disable-next-line react/prop-types
    const { name, ingredients, cooking_method, rating } = recipe[0]
    // console.log(name)
    return (
        <Card className='mt-5' style={{ fontFamily: 'Manrope', fontSize: '20px', backgroundColor: '#e7d8d3' }}>
            <Card.Body>
                <Card.Title><span className='fw-bold'>Recipe Name:</span> {name}</Card.Title>
                <Card.Text><span className='fw-bold'>Ingredients:</span> {
                    // eslint-disable-next-line react/jsx-key, react/prop-types
                    ingredients.map(ingredient => <li>{ingredient}</li>)
                }</Card.Text>
                <Card.Text><span className='fw-bold'>Cooking Method:</span> {cooking_method}</Card.Text>
                <Card.Text><span className='fw-bold'>Rating:</span> <Rating style={{ color: '#bab834' }}
                    readonly
                    placeholderRating={rating}
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar />}
                    fullSymbol={<FaStar />}
                /></Card.Text>
            </Card.Body>
            <Card.Footer>
                <GrFavorite />
            </Card.Footer>
        </Card>

    );
};

export default RecipeDetails;