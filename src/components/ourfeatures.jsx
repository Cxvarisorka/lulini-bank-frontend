import backPng from '../assets/5652242.jpg';

const Feature = ({name,icon}) => {
    return (
        <div className="flex md:flex-row flex-col cursor-pointer gap-3 xl:p-8 p-6  md:rounded-2xl hover:bg-purple-50 transition duration-300">
            <p className="text-purple-500">{icon}</p>
            <div className="flex flex-col gap-3">
                <p className="xl:text-2xl text-xl text-purple-500 font-bold">{name}</p>
                <p className="font-semibold text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius</p>
            </div>
        </div>
    );
}

const OurFeatures = () => {
    const features = [
        {
            name: "Easy to sign up",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          
        },
        {
            name: "Activity Tracking",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
            </svg>
        },
        {
            name: "Trusted and legitimate",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
        },
        {
            name: "Safe & Secure",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        },
        {
            name: "Cheap Exchange Rate",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        },
        {
            name: "24/7 support",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="xl:w-14 w-10 h-10 xl:h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        }
    ]
    return (
        <div className="flex flex-col justify-center items-center xl:gap-24 gap-10 md:py-24 py-16">
            <div className='2xl:container mx-auto flex flex-col justify-center items-center xl:gap-24 gap-10'>
                <div className="flex flex-col items-center text-center gap-5">
                    <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Our Features</p>
                    <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Lulini Is Faster Transactions,<br />Reliable Way To Send Money</p>
                </div>
            
                <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:gap-16">
                    {
                        features.map(obj => {
                            return (
                                <Feature key={obj.name} name={obj.name} icon={obj.icon} />
                            )
                        })
                    }
                </div>
            </div>
            
        </div>
    );
}

export default OurFeatures;