import { useState } from 'react';


import { Link } from 'react-router-dom';

const activeClass = "border-r-4 border-purple-600 bg-purple-100";

const BarItem = ({name,icon,link,active, eventHandler, index, isOpen}) => {
    return (
        <Link to={link} onClick={() => eventHandler(index)} className={`w-full p-5 hover:bg-purple-50 duration-300 md:block ${index === active ? activeClass : ''}`}>
            <div  className={`flex gap-3 items-center ${isOpen ? "md:justify-stretch" : "justify-center"}  justify-center`}>
                <span className='text-purple-600'>{icon}</span>
                <p className={`${isOpen ? "md:block sm:hidden" : "sm:hidden"} sm:font-semibold font-medium text-gray-700 lg:text-xl `}>{name}</p>
            </div>
        </Link>
    )
}

const SideBar = () => {
    const sideBarItems = [
        {
            name: "Dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
            link: '/dashboard',
            active: true          
        },
        {
            name: "Send Money",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>,
            link: 'sendmoney',
            active: false
        },
        {
            name: "Recipients",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>,
            link: 'recipients',
            active: false
        },
        
        {
            name: "Transactions",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>,
            link: "transactions",
            active: false
        },

        {
            name: "Messanger",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
            ,
            link: "messanger",
            active: false
        },
        {
            name: "Change Passowrd",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>,
            link: "changepassword",
            active: false          
        },
        // {
        //     name: "Profile",
        //     icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='sm:w-10 sm:h-10 w-6 h-6'>
        //     <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        //     </svg>,
        //     link: "profile",
        //     active: false
        // }
    ]
    const [active,setActive] = useState(0);
    const [isOpen, setIsOpen] = useState(true)

    const handleClick = (index) => {
        setActive(index);
    };

    const handleBarClick = () => {
        setIsOpen(curValue => !curValue);
    };

    const openClass = "md:w-72 sm:w-24 w-full sm:h-auto shadow-xl  duration-300";
    const closeClass = 'sm:w-24 sm:h-auto w-full shadow-xl duration-300'

    return (
        <div className='flex'>
            <div className={isOpen ? openClass : closeClass}>
                <div className='w-full flex flex-col'>
                    {
                        sideBarItems.map((obj, index) => {
                            return (
                                <BarItem eventHandler={handleClick} index={index} key={obj.name} name={obj.name} icon={obj.icon} link={obj.link} active={active} isOpen={isOpen}/>
                            )
                        })
                    }
                    <div className='w-full p-5 hover:bg-purple-50 duration-300 md:block hidden'>
                        <div className={`flex gap-3 items-center ${isOpen ? "" : "justify-center"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-6 h-6 text-purple-600 cursor-pointer" onClick={handleBarClick}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                            <p className={`${isOpen ? "block" : "sm:hidden"} font-semibold text-gray-700 sm:text-x text-lg`}>Menu</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default SideBar;