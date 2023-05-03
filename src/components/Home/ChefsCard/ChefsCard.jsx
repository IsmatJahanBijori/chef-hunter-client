// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleChefCard from '../SingleChefCard/SingleChefCard';
import './ChefsCard.css'
const ChefsCard = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/chefsCardData")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='my-5 ps-5 card-design'>
            {chefs.map(chef => {
                return <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
            })
            }
        </div>
    );
};

export default ChefsCard;
