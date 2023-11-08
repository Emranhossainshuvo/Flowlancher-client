
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

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

                <div className="relative pt-20 overflow-x-auto">
                    <table className="w-full text-white font-semibold text-sm text-left ">
                        <thead className="text-xs  uppercase   text-white font-semibold">
                            <tr>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Product name
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Color
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Category
                                </th>
                                <th scope="col" className="px-6 text-lg py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className=" border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 text-lg py-4  text-white font-semibold whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 text-lg py-4">
                                    Silver
                                </td>
                                <td className="px-6 text-lg py-4">
                                    Laptop
                                </td>
                                <td className="px-6 text-lg py-4">
                                    $2999
                                </td>
                            </tr>
                            <tr className=" border-b  dark:border-gray-700">
                                <th scope="row" className="px-6 py-4  text-white font-semibold whitespace-nowrap text-lg dark:text-white ">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 text-lg py-4">
                                    White
                                </td>
                                <td className="px-6 text-lg py-4">
                                    Laptop PC
                                </td>
                                <td className="px-6 text-lg py-4">
                                    $1999
                                </td>
                            </tr>
                            <tr className=" ">
                                <th scope="row" className="px-6 text-lg py-4 text-white font-semibold whitespace-nowrap dark:text-white ">
                                    Magic Mouse 2
                                </th>
                                <td className="px-6 text-lg py-4">
                                    Black
                                </td>
                                <td className="px-6 text-lg py-4">
                                    Accessories
                                </td>
                                <td className="px-6 text-lg py-4">
                                    $99
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyPostedJob;