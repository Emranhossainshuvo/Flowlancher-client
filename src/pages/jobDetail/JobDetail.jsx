import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import JobDetailBanner from "./JobDetailBanner";


const JobDetail = () => {

    const job = useLoaderData();

    const { title } = job || {};

    return (
        <>
        <div className="text-center max-w-7xl mx-auto">
            {/* navbar is universal */}
            <Navbar></Navbar>
            {/* after clicking a bid now button */}
            <JobDetailBanner></JobDetailBanner>
            <h3 className="">{title}</h3>



            {/* footer */}
        </div>
            <Footer></Footer>
            </>
    );
};

export default JobDetail;