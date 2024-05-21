import ourImg from '../assets/b2.png';

const OurAgents = () => {
    return (
        <div className="2xl:container mx-auto md:py-24 py-16 flex md:flex-row flex-col items-center gap-8 px-3">
            <div className="flex flex-col md:w-1/2 gap-12">
                <div className='xl:text-start text-center flex flex-col gap-5'>
                    <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Our Agents</p>
                    <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Send Money Worldwide Fast And Secure</p>
                </div>
                
                <p className="font-semibold text-gray-600 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                <p className="font-semibold text-gray-600 text-sm md:text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
            </div>
            <img className='md:w-1/2' src={ourImg}/>
        </div>
    )
}

export default OurAgents;