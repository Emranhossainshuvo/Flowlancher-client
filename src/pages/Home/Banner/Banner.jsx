import { useAnimation } from "react-animatable";

const Banner = () => {
    // const bannerImg = 'url("https://i.ibb.co/xCCwTcP/studio-shot-positive-dark-skinned-girl-wears-round-transparent-glasses.jpg")'; 

    // const bannerStyle = {
    //     backgroundImage: bannerImg, 
    //     backgroundSize: 'cover', 
    //     color: 'white', 
    //     textAlign: 'center', 
    //     padding: '50px'
    // }

    const animate = useAnimation(
        [{ transform: "rotate(0deg)" }, { transform: "rotate(720deg)" }],
        {
          duration: 1000,
          easing: "ease-in-out",
        }
      );

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

            <div  className="max-w-lg pb-3 rounded-md ps-3 md:mx-12 bg-[#61677A] md:order-2">
                <h1 className="text-3xl tracking-wide font-semibold text-[#FFF6E0]   pt-2 md:text-4xl font-custom">The best online job marketplace</h1>
            
                <div className="mt-6">
                    <a href="#" className="block px-3 py-2 font-semibold text-center text-[#272829] transition-colors duration-200 transform bg-[#D8D9DA] rounded-md md:inline hover:bg-[#FFF6E0]">Explore</a>
                </div>
            </div>
        </div>

        <div  ref={animate} onClick={() => {
        // 3. And play it!
        animate.play();
      }} className="md:flex items-center justify-center w-full h-96 md:w-1/2">
            <img className="object-cover w-full h-full hover:opacity-60 cursor-pointer max-w-2xl rounded-md" src="https://i.ibb.co/xCCwTcP/studio-shot-positive-dark-skinned-girl-wears-round-transparent-glasses.jpg" alt="A girl pointing on left side" />
        </div>
    </div>
    </>

    );
};

export default Banner;