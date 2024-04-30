/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from 'react'
import logo from '../assets/Red Modern Initials Letter B Banking Logo (1) (1).png'
import { Link } from 'react-router-dom'
import { dataContext } from '../context/dataContext'

const NavLink = ({linkText, path}) => {
    return (
        <li className='lg:hover:text-purple-600 transition-all duration-300 lg:hover:mx-0 hover:mx-3'><Link to={path}>{linkText}</Link></li>
    )
}

const Navbar = () => {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const {account, logoutFunc} = useContext(dataContext);

    const handleScroll = () => {
        setScrollY(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        
        };
    }, []);

    useEffect(() => {
        setIsNavFixed(scrollY >= 198);
    }, [scrollY]);
    

    const navLinks = [
        {linkText: "Home", path: "/"},
        {linkText: "About Us", path: "/aboutus"},
        {linkText: "How It Works", path: "/howitworks"},
        {linkText: "Contact Us", path: "/contactus"}
        // {linkText: "Dashboard", path: "/dashboard"},

    ]

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={`${isNavFixed ? 'fixed' : 'sticky'} w-full shadow-sm bg-white z-50`}>
            <nav className="2xl:container relative mx-auto py-4 px-3 text-sm lg:text-base font-medium uppercase">
                <div className='flex justify-between items-center'>
                    <Link to='/'><img alt="Lulini Bank's Logo" src={logo} className='sm:w-48 w-36'/></Link>
                    
                    <ul className={`${isNavOpen ? '' : 'hidden'}  lg:flex lg:px-0 lg:py-0 px-3 py-5 flex lg:flex-row flex-col lg:bg-transparent lg:static lg:text-gray-700 text-white absolute top-full left-0 lg:w-auto w-full bg-purple-400 gap-2 sm:gap-3 lg:gap-5 xl:gap-7`}>
                        {navLinks.map((el,i) => {
                            return (
                                <NavLink key={i} linkText={el.linkText} path={el.path} />
                            );
                        })}
                        <NavLink key={4} linkText={"Dashboard"} path={account ? '/dashboard' : '/signin'}/>
                    </ul>


                    <button className='lg:hidden block sm:p-2 p-1 bg-purple-500 hover:bg-purple-600 transition duration-300 rounded-lg ' onClick={toggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="sm:w-8 sm:h-8 text-white w-7 h-7 flex-no-shrink fill-current">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    

                    {
                        account ? 
                        <div className='flex gap-2'>
                            <Link to="/dashboard" 
                            aria-label="Go to signup page" className='bg-purple-500 hover:bg-purple-600 transition duration-300 sm:px-6 px-3 sm:py-3 py-2 text-white rounded-full'>Profile</Link>

                            <button onClick={logoutFunc} className='bg-purple-500 hover:bg-purple-600 transition duration-300 sm:px-6 px-3 sm:py-3 py-2 text-white rounded-full'>Logout</button> 
                        </div>
                        
                        
                        : 
                        
                        <Link to="/signup" 
                        aria-label="Go to signup page" className='bg-purple-500 hover:bg-purple-600 transition duration-300 sm:px-6 px-3 sm:py-3 py-2 text-white rounded-full'>Create Account</Link>
                    }
                    
                </div>
            </nav>
        </header>
        
    )
}

export default Navbar;