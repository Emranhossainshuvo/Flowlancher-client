import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {

    const {_id,  title, description, maximum, minimum, deadline, select } = job || {}
    const [showButton, setShowButton] = useState(false)

    return (
        <div className='bg-[#435585] opacity-80 relative mt-20 rounded-lg p-2 hover:bg-[#818FB4] delay-100'
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => setShowButton(false)}
        >
            <p className='absolute top-0 right-0 -mt-3 mr-3 px-2 py-1 border border-gray-300 rounded-md text-white bg-[#363062]'>{select}</p>
            <h3 className='text-3xl mt-5 font-semibold'>{title}</h3>
            <p>{description}</p>
            <p> 🕙 {deadline}</p>
            <div className='flex gap-5 bg-[#363062] w-1/2 ps-2 rounded-md'>
                <p>Min. $ {minimum}</p>
                -
                <p>Max. $ {maximum}</p>
            </div>
            {
                showButton &&
                <Link to={`/jobs/${_id}`}>
                    <button className='absolute inset-0 m-auto px-4 py-2 backdrop-blur-sm border border-gray-300 rounded-lg'>Bid now</button>

                </Link>

            }
        </div>
    );
};

export default JobCard;