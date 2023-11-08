

const Banner = () => {
    // const bannerImg = 'url("https://i.ibb.co/xCCwTcP/studio-shot-positive-dark-skinned-girl-wears-round-transparent-glasses.jpg")'; 

    // const bannerStyle = {
    //     backgroundImage: bannerImg, 
    //     backgroundSize: 'cover', 
    //     color: 'white', 
    //     textAlign: 'center', 
    //     padding: '50px'
    // }

    return (
        <>
        {/* // <!-- component --> */}


    <div className="containerd max-w-7xl flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row-reverse md:items-center md:space-x-6">
        <div className="flex flex-col  items-center w-full md:flex-row md:w-1/2">
            {/* <div className="flex ms-5 justify-center order-2 mt-6 md:mt-0 md:space-y-3 md:flex-col">
                <button className="w-3 h-3 mx-2 bg-blue-500 rounded-full md:mx-0 focus:outline-none"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
                <button className="w-3 h-3 mx-2 bg-gray-300 rounded-full md:mx-0 focus:outline-none hover:bg-blue-500"></button>
            </div> */}

            <div className="max-w-lg md:mx-12 md:order-2">
                <h1 className="text-3xl font-medium tracking-wide  text-white md:text-4xl font-custom">The best Apple Watch apps</h1>
                <p className="mt-4 text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia asperiores alias vero magnam recusandae adipisci ad vitae laudantium quod rem voluptatem eos accusantium cumque.</p>
                <div className="mt-6">
                    <a href="#" className="block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-blue-500 rounded-md md:inline hover:bg-blue-400">Download from App Store</a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://i.ibb.co/xCCwTcP/studio-shot-positive-dark-skinned-girl-wears-round-transparent-glasses.jpg" alt="A girl pointing on left side" />
        </div>
    </div>
    </>

    );
};

export default Banner;