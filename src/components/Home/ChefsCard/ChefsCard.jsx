// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleChefCard from '../SingleChefCard/SingleChefCard';
// import SingleChefCard from '../SingleChefCard/SingleChefCard';
// import { Card } from 'rea ct-bootstrap';
// import { Button, Card } from 'react-bootstrap';
// import SingleChefCard from '../SingleChefCard/SingleChefCard'
const ChefsCard = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/chefsCardData")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <div className='my-5 text-center'>
            {chefs.map(chef => {
                return <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
            })
            }
        </div>
    );
};

export default ChefsCard;

{/**<SingleChefCard key={chef.id} chef={chef}></SingleChefCard> */ }
{/**
<Card>
                    <Card.Header>{chef.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card> */}