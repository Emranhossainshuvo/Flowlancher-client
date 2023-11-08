import { useState } from "react";
import { useEffect } from "react";
import JobCard from "./JobCard";


const Jobs = () => {
    const [jobs, setJobs] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    // const job = jobs.length > 0 ? jobs[0] : {}

    // ;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="text-center py-5 rounded-lg bg-[#61677A]">
                <h2 className="text-5xl font-semibold text-[#FFF6E0] ">Find what makes you comportable</h2>
                <p className="text-[#FFF6E0] font-semibold">Unlock your potential with our online job marketplace, where opportunities <br /> meet ambition, and we're here to guide you every step of the way.</p>
            </div>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    jobs.map(job => <JobCard key={job._id} job={job}
                    >

                    </JobCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;