// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useEffect } from 'react';
import SingleChefCard from '../SingleChefCard/SingleChefCard';
import './ChefsCard.css'
import { Container } from 'react-bootstrap';
const ChefsCard = () => {
    const [chefs, setChefs] = useState([])
    useEffect(() => {
        fetch("https://chef-hunter-server-ismatjahanbijori.vercel.app/chefsCardData")
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    return (
        <Container>
            <div className='mt-5 text-center' style={{ fontFamily: 'Manrope', fontSize: '50px', fontWeight: 'bolder' }}>
                <h1>Our Team</h1>
                <div className='card-design'>
                    {chefs.map(chef => {
                        return <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
                    })
                    }
                </div>

            </div>
        </Container>
    );
};

export default ChefsCard;
{/**
<Row >
                    <Col xs={1} md={3}>
                        {chefs.map(chef => {
                            return <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
                        })
                        }
                    </Col>
                </Row> */}