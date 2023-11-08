
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const MyPostedJob = () => {

    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState([]); 

    const url = `http://localhost:5000/jobs?email=${user?.email}`

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [url])

    return (
        <div>
            <div className='bg-[#272829]'>
                <Navbar></Navbar>
                <Helmet><title>FlowLancher | My posted jobs</title></Helmet>
                <h3 className='text-5xl'>My posted job is comming: {jobs.length}</h3>
            </div>
                <Footer></Footer>
        </div>
    );
};

export default MyPostedJob;