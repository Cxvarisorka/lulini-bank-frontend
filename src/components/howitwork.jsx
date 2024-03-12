import luliniPhone from '../assets/lulinibank (1).png';

const HowItWork = () => {
    
    return (
        <div className='w-full 2xl:container mx-auto flex gap-5 justify-between'>
            <img style={{width: "40%"}} src={luliniPhone}/>
            <div className='flex py-8 w-full flex-col justify-center gap-8'>
                <p className='uppercase text-purple-500 font-bold text-2xl'>How It Work</p>
                <p className='text-gray-700 text-5xl font-bold'>Transfer Money Across The World In Real Time</p>
                <p className='font-semibold text-gray-500 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                <p className='font-semibold text-gray-500 text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
            </div>
        </div>
    )
}

export default HowItWork;