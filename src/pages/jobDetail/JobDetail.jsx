import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import JobDetailBanner from "./JobDetailBanner";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";


const JobDetail = () => {

    // const {user} = useContext(AuthContext); 

    const job = useLoaderData();

    const { title, description, maximum, minimum, deadline, select } = job || {}

    const handleBidJob = e => {
        e.preventDefault();
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
                <div className="wful">
                    <form onSubmit={handleBidJob}>
                        <label htmlFor="name">Price:</label><br />
                        <input type="text" name="price" /><br /><br />

                        <label htmlFor="address">Deadline:</label><br />
                        <input type="text" name="deadline"  /><br /><br />

                        <label htmlFor="contact">Email:</label><br />
                        <input type="text" name="email"  /><br /><br />

                        <label htmlFor="email">Buyer:</label><br />
                        <input type="email" name="buyer"  /><br /><br />

                        <input type="submit" value="Submit" />
                    </form>
                </div>
                {/* footer */}
            </div>
            <Footer></Footer>
        </>
    );
};

export default JobDetail;