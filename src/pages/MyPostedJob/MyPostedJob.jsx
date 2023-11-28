
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyPostedJobRow from './MyPostedJobRow';
import Swal from 'sweetalert2';

const MyPostedJob = () => {

    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);

    const url = `http://localhost:5000/jobs?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [url])

    const handleDelete = id => {

        fetch(`http://localhost:5000/jobs/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {



                Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your job has been deleted.",
                            icon: "success"
                        });
                        // console.log('deleted')
                        if (data.deletedCount > 0) {
                            // console.log('delet')
                            const remaining = jobs.filter(job => job._id !== id)
                            setJobs(remaining)
                        }
                    }
                });

            })
    }

    return (
        <>
        <div className='bg-[#272829]'>
            <div className='max-w-7xl mx-auto'>
                <div className=' mb-20'>
                    <Navbar></Navbar>
                    <Helmet><title>FlowLancher | Update job</title></Helmet>
                    {/* user specific job will code here */}
                    {/* console.log(bid) */}
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
                                        handleDelete={handleDelete}
                                    ></MyPostedJobRow>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
                <Footer></Footer>
        </>
    );
};

export default MyPostedJob;