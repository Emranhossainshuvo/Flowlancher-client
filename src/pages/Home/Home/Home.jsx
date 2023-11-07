import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
// import React from "react";
import {Helmet} from "react-helmet";
import Jobs from "../jobs/Jobs";
import Donators from "../donators/Donators";
// import Skills from "../skills/Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Helmet><title>FlowLancher | Home</title></Helmet>
            <Banner></Banner>
            {/* <Skills></Skills> */}
            <Jobs></Jobs>
            <h2 className="text-3xl">This is home</h2>
            <Donators></Donators>
            <Footer></Footer>            
        </div>
    );
};

export default Home;