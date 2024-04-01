import b5 from "../assets/b5.png";

const OurCompany = () => {
    const companyInfo = ["Making this the first true generat on the Internet", "Making this the first true generat on the Internet", "Making this the first true generat on the Internet", "Making this the first true generat on the Internet"]

    return (
        <div className="bg-gradient-to-r from-purple-200 to-purple-50">
           <div className="2xl:container mx-auto flex flex-col gap-24 xl:items-start items-center md:py-24 py-16 px-3">
                <div className='w-full text-center flex flex-col gap-5'>
                        <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Our Agents</p>
                        <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Send Money Worldwide Fast And Secure</p>
                </div>
                <div className="flex gap-20 items-center lg:flex-row flex-col">
                    <img className="lg:w-2/6 sm:w-5/12" src={b5}/>
                    <div className="lg:w-1/2 flex flex-col gap-16">
                        <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">We Provide Best Payment Solutions Worldwide</p>
                        <p className="font-semibold text-gray-600 text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, aliquam commodi deleniti dicta ducimus ea eligendi est exercitationem expedita facilis harum inventore iste iusto maiores maxime molestias obcaecati provident quod ratione similique soluta suscipit totam unde voluptatem. Delectus enim et incidunt placeat tempora. Blanditiis corporis eius eveniet ipsa minima</p>
                        <div className="grid sm:grid-cols-2 gap-7">
                            {
                                companyInfo.map((value,i) => {
                                    return (
                                        <div key={i} className="flex gap-3 items-center">
                                            <p className="bg-purple-500 flex justify-center items-center p-2 text-white rounded-full">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                                </svg>
                                            </p>
                                            <p className="font-semibold text-gray-700 text-sm md:text-lg">{value}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
    )
}

export default OurCompany;