import luliniPhone from '../assets/lulinibank (1).png';
import AnimatedComponent from './animatedcomponent';

const Part = ({icon,title, text}) => {
    return (
        <div className='flex flex-col gap-2'>
            <p className='text-purple-500'>{icon}</p>
            <p className='xl:text-2xl text-xl font-bold text-gray-700'>{title}</p>
            <p className='text-gray-600 font-medium text-sm md:text-base'>{text}</p>
        </div>
    )
}

const HowItWork = () => {

    const mainObjs = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>,
            title: "1. Download App",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>,
            title: "2. Create Account",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>,
            title: "3. Let's Start",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
        }
    ]
    
    return (
        <AnimatedComponent className='w-full flex justify-between px-3 bg-gradient-to-r from-purple-200 to-purple-50'>
            <div className='2xl:container mx-auto flex gap-8 xl:items-start items-center xl:flex-row flex-col'>
                <img className='md:w-5/12 sm:w-1/2' src={luliniPhone}/>
                <div className='py-12 w-full h-full flex flex-col 2xl:gap-24 xl:gap-16 gap-10
                '>
                    <div className="flex flex-col gap-5 xl:text-start text-center">
                        <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">How It Work</p>
                        <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Transfer Money Across<br/> The World In Real Time</p>
                    </div>
                    
                    <p className='font-semibold text-gray-600 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                    <p className='font-semibold text-gray-600 text-sm md:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam, labore ea magnam at ab vero voluptatem alias similique natus nam ex suscipit facere illum fuga et, impedit eligendi voluptates. Sapiente est amet explicabo, dolorem, voluptas vel excepturi nisi voluptatum libero quidem autem quasi, sit quod. Unde autem est eligendi rerum neque?</p>
                    <div className='flex xl:gap-7 gap-10 sm:flex-row flex-col'>
                        {mainObjs.map((obj) => {
                            return (
                                <Part key={obj.title} icon={obj.icon} title={obj.title} text={obj.text}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </AnimatedComponent>
    )
}

export default HowItWork;