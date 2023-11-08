import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
// import React from "react";
import { Helmet } from "react-helmet";
import Jobs from "../jobs/Jobs";
import Donators from "../donators/Donators";
// import Skills from "../skills/Skills";


const Home = () => {
    return (
        <div className="text-white">
            <div style={{backgroundImage: 'url(https://i.ibb.co/jR4xKR8/1192277-OSVNZK0.jpg)', backgroundSize: 'cover'}}>
                <Navbar></Navbar>
                <Banner></Banner>
            <h2 className="text-3xl">This is home</h2>
            <Jobs></Jobs>
            <Donators></Donators>
            <Footer></Footer>
            </div>
            <Helmet><title>FlowLancher | Home</title></Helmet>
            {/* <Skills></Skills> */}
        </div>
    );
};

export default Home;