import React from 'react';

const JobCard = ({job}) => {

    const { title, description, maximum, minimum, deadline, select } = job || {} 

    return (
        <div className='bg-[#e3f9eeb9] hover:bg-[#9eb9abf7] delay-100'>
            <h3 className='text-3xl font-semibold'>{title}</h3>
            <p>{description}</p>
            <p>{deadline}</p>
            
        </div>
    );
};

export default JobCard;