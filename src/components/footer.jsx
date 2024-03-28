import { Link } from 'react-router-dom';
import logo from '../assets/Red Modern Initials Letter B Banking Logo (1) (1).png';

const Footer = () => {
    const navLinks = [
        {linkText: "Home", path: "/"},
        {linkText: "About Us", path: "/aboutus"},
        {linkText: "How It Works", path: "/howitworks"},
        {linkText: "Contact Us", path: "/contactus"},
        {linkText: "Dashboard", path: "/dashboard"},
    ]

    const contactInfo = [
        {
            title: "Phone",
            text: "+995 555 277 335",
        },
        {
            title: "Email",
            text: "lcxvaradzee400@gmail.com"    
        },
        {
            title: "Address",
            text: "Kutaisi, Kharebavas street"    
        }
    ]

    return (
        <footer className='bg-purple-50'>
            <div className='2xl:container mx-auto md:py-24 py-16 flex justify-between md:flex-row flex-col items-baseline md:gap-8 gap-20 px-3'>
                
                <div className='md:w-1/2 w-full flex flex-col justify-center md:text-start text-center md:items-start items-center gap-8'>
                    <p className='text-purple-500 font-bold xl:text-2xl md:text-xl text-lg'>About Us</p>
                    <p className='font-medium text-gray-700 text-sm md:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img src={logo} alt='Logo' className=' w-48'/>
                </div>

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center text-center md:gap-8 gap-5'>
                    <p className='text-purple-500 font-bold xl:text-2xl md:text-xl text-lg'>Quick Links</p>
                    <div className='flex flex-col gap-3'>
                        {
                            navLinks.map(obj => {
                                return (
                                    <Link key={obj.linkText} className='font-medium text-gray-700 text-sm md:text-base' to={obj.path}>{obj.linkText}</Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='md:w-1/2 w-full flex flex-col justify-center items-center text-center md:gap-8 gap-5'>
                    <p className='text-purple-500 font-bold xl:text-2xl md:text-xl text-lg'>Contact Information</p>
                    <div className='flex flex-col gap-3'>
                        {
                            contactInfo.map(obj => {
                                return (
                                    <p key={obj.title} className='font-medium text-gray-700 text-sm md:text-base'><span className='font-bold'>{obj.title}</span>: {obj.text}</p>
                                )
                            })
                        }
                        
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;