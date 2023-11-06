import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const AddJob = () => {
    return (
        <div> 
            <Navbar></Navbar>
            {/* form for addign a new job */}
                <form className='max-w-4xl mx-auto mt-10'>
                    <img className='w-3/5 mx-auto' src="https://i.ibb.co/qYxbGP2/4273.jpg" alt="" />
                </form>
                <Footer></Footer>
        </div>
    );
};

export default AddJob;