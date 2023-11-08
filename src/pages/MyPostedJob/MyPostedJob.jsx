
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';

const MyPostedJob = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet><title>FlowLancher | My posted jobs</title></Helmet>
            <h3 className='text-5xl'>My posted job is comming</h3>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJob;