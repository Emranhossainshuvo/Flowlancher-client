import { Helmet } from "react-helmet";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateJob = () => {

    const job = useLoaderData();

    const {user} = useContext(AuthContext)

    const { _id, title, description, maximum, minimum, deadline, select } = job || {}

    // function for update the job

    const handleUpdateJob = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const minimum = form.minimum.value;
        const maximum = form.maximum.value;
        const description = form.description.value;
        const select = form.select.value;

        const updatedJob = { email, title, select, deadline, minimum, maximum, description };
        // console.log(newJob)

        // send a post request to the server
        fetch(`http://localhost:5000/jobs/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Successfully Updated this job❤',
                    });
                }
            })
    }

    return (
        <div>
            <div style={{ backgroundImage: 'url(https://i.ibb.co/xFbgqFd/black-background-with-stationery.jpg)' }}>
                <Navbar></Navbar>

                <h3 className='text-center text-4xl py-10 text-white font-semibold'>Update : {title}</h3>

                <Helmet><title>FlowLancher | Update job</title></Helmet>

                <div className='mt-10 pb-20 max-w-7xl mx-auto'>

                    <form onSubmit={handleUpdateJob}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="email" disabled name="email" id="floating_email" className=" block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" defaultValue={user?.email} placeholder="  " required />
                            <label
                                className="peer-focus:font-medium font-semibold absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={title} name="title" id="floating_password" className=" block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" placeholder=" " required />
                            <label
                                className="peer-focus:font-medium font-semibold absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Job title</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="date" defaultValue={deadline} name="deadline" id="floatin g_repeat_password" className="block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" placeholder=" " required />
                            <label
                                className="peer-focus:font-medium font-semibold absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" defaultValue={minimum} name="minimum" id="floatin g_first_name" className="block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" placeholder=" " required />
                                <label

                                    className="peer-focus:font-medium font-semibold absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Minimum price
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" defaultValue={maximum} name="maximum" id="floatin g_last_name" className="block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" placeholder=" " required />
                                <label
                                    className="peer-focus:font-medium font-semibold absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Maximum price</label>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input type="text" defaultValue={description} name="description" id="floatin g_phone" className="block py-2.5 px-0 w-full text-sm font-semibold text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0    peer" placeholder=" " />
                                <label
                                    className="peer-focus:font-medium font-semibold absolute text-sm text-white  dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">



                                <select name='select' className='w-full text-white bg-[#454545] font-semibold border-b-2 border-gray-300 bg-transparent mt-3 pb-1'>
                                    <option value="Quantum Computing">Quantum Computing 🧬🔬🌀</option>
                                    <option value="Blockchain Technology">Blockchain Technology🔗💱🔒</option>
                                    <option value="Cloud Computing">Cloud Computing🌐☁️💻</option>
                                    <option value="Deep Learning">Deep Learning🧠🤖💡</option>
                                    {/* <hr /> */}
                                </select>
                                <hr />

                            </div>
                        </div>
                        <button type="submit" className="text-white bg-[#363062] hover:bg-[#435585] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update job</button>
                    </form>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateJob;