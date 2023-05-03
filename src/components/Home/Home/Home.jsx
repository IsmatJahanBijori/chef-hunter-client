// eslint-disable-next-line no-unused-vars
import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import ChefsCard from '../ChefsCard/ChefsCard';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Reservation from '../Reservation/Reservation';
const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ChefsCard></ChefsCard>
            <FeaturedProducts></FeaturedProducts>
            <Reservation />
        </div>
    );
};

export default Home;