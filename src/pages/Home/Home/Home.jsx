import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
// import React from "react";
import { Helmet } from "react-helmet";
import Jobs from "../jobs/Jobs";
import Donators from "../donators/Donators";
import Feature from "../feature/Feature";
// import Skills from "../skills/Skills";


const Home = () => {
    return (
        <div>
            <div className="pb-16" style={{backgroundColor: '#272829' }}>
                <Navbar></Navbar>
                <Banner></Banner>
            <h2 className="text-3xl">This is home</h2>
            <Jobs></Jobs>
            <Donators></Donators>
            <Feature></Feature>
            </div>
            <Footer></Footer>
            <Helmet><title>FlowLancher | Home</title></Helmet>
            {/* <Skills></Skills> */}
        </div>
    );
};

export default Home;