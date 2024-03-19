import chooseImg from "../assets/b3.png";

import { Link } from "react-router-dom";

const WhyChooseUs = () => {
    return (
        <div className="2xl:container mx-auto md:py-24 py-16 flex items-center md:flex-row flex-col gap-12 px-3">
            <img className="md:w-1/3 sm:w-1/2" src={chooseImg}/>
            <div className="flex flex-col w-full gap-12">
                <div className='flex flex-col gap-5'>
                    <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Why choose us</p>
                    <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Why People Choose Lulini Service?</p>
                </div>
                <p className="text-sm md:text-base text-gray-600 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                <p className="text-sm md:text-base text-gray-600 font-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                <div className="flex items-center gap-9 z-10">
                        <Link to={'/signup'} className='bg-purple-500 hover:bg-purple-600 transition duration-300 sm:px-6 px-3 sm:py-3 py-2 text-white rounded-full' aria-label="Go to signup page">Get Started</Link>
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100088419544165" aria-label="About Creator" id="creator"  className=' inline-flex relative justify-center items-center sm:p-2 p-1 bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-8 sm:h-8 text-white w-7 h-7 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                            </svg>
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                        </a>
                        
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;