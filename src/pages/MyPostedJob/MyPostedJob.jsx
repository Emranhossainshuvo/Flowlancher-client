
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyPostedJobRow from './MyPostedJobRow';

const MyPostedJob = () => {

    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url])

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='bg-[#272829]'>
                <Navbar></Navbar>
                <Helmet><title>FlowLancher | My posted jobs</title></Helmet>
                {/* user specific job will code here */}

                <div className="relative pt-28 pb-28 overflow-x-auto">
                    <table className="w-full text-white font-semibold text-sm text-left ">
                        <thead className="text-xs  uppercase   text-white font-semibold">
                            <tr>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Job title
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Min. price
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Max. price
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Deadline
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                jobs.map(job => <MyPostedJobRow key={job._id}

                                    job={job}
                                ></MyPostedJobRow>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJob;