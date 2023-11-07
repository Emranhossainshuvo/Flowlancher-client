

const JobDetailBanner = () => {
    return (
        <div className="hero max-w-7xl mx-auto mt-20 rounded-2xl min-h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/6JR4qxX/12297152-4892463.jpg)' }}>
            <div className="hero-overlay rounded-2xl bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome😊</h1>
                    <p className="mb-5">Success is the sum of small efforts repeated day in and day out. Your dedication fuels our collective growth.</p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default JobDetailBanner;