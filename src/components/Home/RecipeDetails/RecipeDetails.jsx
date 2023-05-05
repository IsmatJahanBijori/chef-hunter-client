/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { GrFavorite } from "react-icons/gr";
import { FaStar, FaRegStar } from "react-icons/fa";
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


// eslint-disable-next-line react/prop-types
const RecipeDetails = ({ recipe }) => {

    // eslint-disable-next-line react/prop-types
    const { name, ingredients, cooking_method, rating } = recipe[0]
    // console.log(name)
    const [liked, setLiked] = useState(false)
    const handleFavButton = () => {
        setLiked(true)
        toast('You loved the recipe')
    }
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
                <Button disabled={liked} onClick={handleFavButton}><GrFavorite className='me-2 align-items-center' />
                    {liked ? 'Loved' : 'Love'}</Button>
                <ToastContainer />
            </Card.Footer>
        </Card>

    );
};

export default RecipeDetails;