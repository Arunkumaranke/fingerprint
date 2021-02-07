import React from 'react';
import Banner from '../componets/banner';
import Description from '../componets/description';
import Header from '../componets/header/header';
import Product from '../componets/product';

const Home = () => {
    return(
        <div>
            <Header />
            <Banner />
            <Description />
            <Product />
        </div>
    )
}
export default Home;