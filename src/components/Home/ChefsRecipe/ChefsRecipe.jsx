// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefsRecipe = () => {
    const chefsInfo=useLoaderData()
    // console.log(chefsInfo)
    return (
        <h2>{chefsInfo.name}</h2>
    );
};

export default ChefsRecipe;