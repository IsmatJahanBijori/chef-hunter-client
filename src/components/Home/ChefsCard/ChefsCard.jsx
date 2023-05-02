// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
// import ChefsInfo from '../ChefsInfo/ChefsInfo';
const ChefsCard = () => {
    // eslint-disable-next-line no-unused-vars
    const {id}=useParams()
    // eslint-disable-next-line no-unused-vars
    const chefsCategory=useLoaderData()
    console.log(chefsCategory)
    return (
        <div>
        
        </div>
    );
};

export default ChefsCard;
{/** {
                chefsCategory.map(data => <ChefsInfo key={data.id} data={data}></ChefsInfo>)
            } */}