import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const BidRequest = () => {
    return (
        <div className='bg-gray-600'>
            <Helmet><title>FlowLancher | Bid request</title></Helmet>
            <Navbar></Navbar>
            <h4 className='text-5xl'> bid request are comming</h4>
            <Footer></Footer>
        </div>
    );
};

export default BidRequest;