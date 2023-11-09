
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MybidsCard from './MybidsCard';

const MyBids = () => {


    const {user} = useContext(AuthContext)
    const [bids, setBids] = useState([])

    const url = `http://localhost:5000/bids?email=${user.email}`
    

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBids(data))
    }, [url])


    return (
        <>
        <div className='max-w-7xl mx-auto text-white bg-[#272829]'>
            <Navbar></Navbar>
            <Helmet><title>FlowLancher | My bids</title></Helmet>
            {/* my bids data will appear here */}

                {/* <h2>bid:</h2> */}
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase   dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 text-white font-semibold text-lg py-3">
                                Buyer
                            </th>
                            <th scope="col" className="px-6 text-white font-semibold text-lg py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 text-white font-semibold text-lg py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 text-white font-semibold text-lg py-3">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            bids.map(bid => <MybidsCard key={bid._id}
                                bid={bid}
                            >

                            </MybidsCard>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
            <Footer></Footer>
        </>
    );
};

export default MyBids;