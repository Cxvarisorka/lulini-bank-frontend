import b4 from "../assets/b4.png"

const AppDownload = () => {
    return (
        <div className="w-full flex justify-between px-3 bg-gradient-to-r from-purple-200 to-purple-50">
           <div className="2xl:container mx-auto flex gap-8 xl:items-start justify-center items-center xl:flex-row flex-col md:py-24 py-16">
                <div className="flex flex-col xl:gap-16 gap-10">
                    <div className="flex flex-col gap-5">
                        <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">APP DOWNLOAD</p>
                        <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Download App Fast And Secure Way To Send Money</p>
                    </div>
                    <p className='font-semibold text-gray-600 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                    <p className='font-semibold text-gray-600 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                    <div className="flex gap-7">
                        <a href="#" className="bg-purple-500 p-3 text-white font-semibold lg:text-lg inline-flex items-center gap-1 hover:shadow-xl duration-300 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            Google Play
                        </a>
                        <a href="#" className="bg-purple-500 p-3 rounded-full text-white font-semibold lg:text-lg inline-flex items-center gap-1 hover:shadow-xl duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            App Store
                        </a>
                    </div>
                </div>
                <img className="xl:w-1/2 md:w-7/12 flex" src={b4}/>
            </div> 
        </div>
        
    )
}

export default AppDownload;