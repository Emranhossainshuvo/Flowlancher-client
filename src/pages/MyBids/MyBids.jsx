import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const MyBids = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet><title>FlowLancher | My bids</title></Helmet>
            <h3 className='text-5xl'> my bids are comming</h3>
            <Footer></Footer>
        </div>
    );
};

export default MyBids;