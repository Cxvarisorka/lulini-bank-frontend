import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Converter from "./converter.jsx";



const Hero = () => {
    return (
        <div className="w-full bg-purple-50 md:py-36 py-10">
            <div className="2xl:container flex justify-between items-center sm:flex-row flex-col mx-auto px-3 h-full gap-11">
                <div className="sm:w-2/3 w-full flex justify-center flex-col gap-10">
                    <h1 className="lg:text-5xl sm:text-4xl  text-3xl font-bold text-gray-700">Transfer Your Money At Secure and fastestTransfer Your Remittance At Secure and fastest</h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita vero eius exercitationem nesciunt iusto quasi facere impedit quas vel? Impedit vel laudantium necessitatibus fugiat.</p>
                    <div className="flex items-center gap-9">
                        <Link to={'/signup'} className='bg-purple-500 hover:bg-purple-600 transition duration-300 sm:px-6 px-3 sm:py-3 py-2 text-white rounded-full' aria-label="Go to signup page">Get Started</Link>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100088419544165" aria-label="About Creator" id="creator"  className=' inline-flex relative justify-center items-center sm:p-2 p-1 bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-8 sm:h-8 text-white w-7 h-7 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                        </a>
                        
                    </div>
                </div>
                <Converter/>
            </div> 
        </div>
        
    )
}

export default Hero;