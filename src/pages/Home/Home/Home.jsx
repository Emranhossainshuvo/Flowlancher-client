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
        <div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/jR4xKR8/1192277-OSVNZK0.jpg)'}}>
                <Navbar></Navbar>
                <Banner></Banner>
            <Jobs></Jobs>
            <Donators></Donators>
            <Footer></Footer>
            </div>
            <Helmet><title>FlowLancher | Home</title></Helmet>
            {/* <Skills></Skills> */}
            <h2 className="text-3xl">This is home</h2>
        </div>
    );
};

export default Home;