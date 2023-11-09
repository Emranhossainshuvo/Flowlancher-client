import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import JobDetailBanner from "./JobDetailBanner";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";


const JobDetail = () => {

    const { user } = useContext(AuthContext)

    // const {user} = useContext(AuthContext); 

    const job = useLoaderData();

    const { title, description, maximum, minimum, deadline, select } = job || {}

    const handleBidJob = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const deadline = form.deadline.value;
        const price = form.price.value;
        const buyer = form.buyer.value;
        const select = form.select.value; 
        const newBid = { email, deadline, price, buyer, select }
        console.log(newBid)

        //  send data to the server and then database

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Successfully bid in the job!',
                    });
                }
            })

    }

    return (
        <>
            <div className="text-center bg-slate-400 max-w-7xl mx-auto">
                {/* navbar is universal */}
                <Navbar></Navbar>
                {/* after clicking a bid now button */}
                <JobDetailBanner></JobDetailBanner>
                <h3 className="pt-16 text-3xl font-semibold">{title}</h3>
                <p className="pt-5">{description}</p>
                <p>Deadline: {deadline}</p>
                <p>Price range: {minimum} - {maximum}</p>
                {/* place your bid form */}
                <div className="pb-10">
                    <form onSubmit={handleBidJob}>
                        <label htmlFor="name">Price:</label><br />
                         <input required className="rounded-md ps-2 h-8 w-2/5" type="number" name="price" /><br /><br />

                        <label htmlFor="address">Deadline:</label><br />
                         <input required className="rounded-md ps-2 h-8 w-2/5" type="date" name="deadline" /><br /><br />

                        <label htmlFor="contact">Email:</label><br />
                         <input required disabled defaultValue={user?.email} className="rounded-md ps-2 h-8 w-2/5" type="text" name="email" /><br /><br />

                        <label htmlFor="email">Buyer:</label><br />
                         <input required className="rounded-md ps-2 h-8 w-2/5" type="email" name="buyer" /><br /><br />

                        <select name='select' className='w-2/5 mb-10 h-10 rounded-md text-white bg-[#454545] font-semibold border-b-2 border-gray-300 bg-transparent mt-3 pb-1'>
                            <option value="Quantum Computing">Quantum Computing 🧬🔬🌀</option>
                            <option value="Blockchain Technology">Blockchain Technology🔗💱🔒</option>
                            <option value="Cloud Computing">Cloud Computing🌐☁️💻</option>
                            <option value="Deep Learning">Deep Learning🧠🤖💡</option>
                            
                        </select> <br />


                         <input required className="btn bg-transparent " type="submit" value="Submit" />
                    </form>
                </div>
                {/* footer */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default JobDetail;