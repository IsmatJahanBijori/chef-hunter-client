// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../Shared/Header/Header'
// import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import HomeBanner from '../Home/HomeBanner/HomeBanner';
import ChefsCard from '../Home/ChefsCard/ChefsCard';
import FeaturedProducts from '../Home/FeaturedProducts/FeaturedProducts';
import Reservation from '../Home/Reservation/Reservation';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <HomeBanner/>
            <ChefsCard/>
            <FeaturedProducts></FeaturedProducts>
            <Reservation/>
            <Footer></Footer>
        </div>
    );
};

export default Main;