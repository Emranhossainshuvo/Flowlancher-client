import React, { useState } from 'react';

const JobCard = ({ job }) => {

    const { title, description, maximum, minimum, deadline, select } = job || {}
    const [showButton, setShowButton] = useState(false)

    return (
        <div className='bg-[#e3f9eeb9] relative rounded-lg p-2 hover:bg-[#9eb9abf7] delay-100'
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <p className='absolute top-0 right-0 -mt-3 mr-3 px-2 py-1 border border-gray-300 rounded-md text-white bg-[#a8bab1]'>{select}</p>
            <h3 className='text-3xl mt-5 font-semibold'>{title}</h3>
            <p>{description}</p>
            <p> 🕙 {deadline}</p>
            <div className='flex gap-5 bg-[#badbcaf7] w-1/2 ps-2 rounded-md'>
                <p>Min. $ {minimum}</p>
                -
                <p>Max. $ {maximum}</p>
            </div>
            {
                showButton && 
                <button className='absolute inset-0 m-auto px-4 py-2 backdrop-blur-sm border border-gray-300 rounded-lg'>Bid now</button>
            }
        </div>
    );
};

export default JobCard;