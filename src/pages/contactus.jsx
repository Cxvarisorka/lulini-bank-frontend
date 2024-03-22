import DynamicHero from "../components/dynamichero";
import contactimg from "../assets/contact.png"
import Testimonials from "../components/testimonials";

const PartContact = ({title,icon,text1,text2}) => {
    return (
        <div className="flex gap-5 items-center w-full p-8 border-2 border-purple-500 rounded-lg">
            <p className="lg:p-3 p-2 bg-purple-500 text-white rounded-lg">
                {icon}
            </p>
            <div className="flex flex-col gap-2">
                <p className="font-bold text-gray-600 text-sm md:text-2xl">{title}</p>
                <div className="flex flex-col">
                    <p className="font-semibold text-gray-600 text-sm md:text-base">{text1}</p>
                    <p className="font-semibold text-gray-600 text-sm md:text-base">{text2}</p>
                </div>
                
            </div>
        </div>
    )
}

const ContactUs = () => {

    const infoContact = [
        {
            title: "Address",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>,
            text1: "225 8th Ave, New York, NY 199980, USA",
            text2: "Kharebavas street"
        },
        {
            title: "Contact",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>,
            text1: "Phone: +995 555 277 335",
            text2: "E-mail: lcxvaradzee400@gmail.com"
        },
        {
            title: "Hours of Operation",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>,
            text1: "Monday - Friday: 10:00 - 20:00",
            text2: "Sunday & Saturday: 9:30 - 22:00"
        }
    ];

    const inputs = [
        {
            placeholder: "Enter your name*",
            type: "text",
            name: "firstname"
        },
        {
            placeholder: "Enter your lastname*",
            type: "text",
            name: "lastname"
        },
        {
            placeholder: "Enter your email*",
            type: "email",
            name: "email"
        },
        {
            placeholder: "Enter your subject*",
            type: "text",
            name: "subject"
        }
    ]

    return (
        <>
            <DynamicHero title={"Contact Us"}/>
            <main className="2xl:container mx-auto flex flex-col gap-24 xl:items-start items-center md:py-24 py-16 px-3">
                <form className="w-full flex flex-col md:gap-24 gap-16">
                    <div className="w-full grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 justify-between">
                        {
                            infoContact.map(obj => {
                                return (
                                    <PartContact title={obj.title} icon={obj.icon} text1={obj.text1} text2={obj.text2}/>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col md:gap-24 gap-16">
                        <div className='w-full text-center flex flex-col gap-5'>
                            <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Contact Us</p>
                            <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Get In Touch With Us</p>
                        </div>
                        <div className="flex items-center gap-12 md:flex-row flex-col">
                            <img className="md:w-1/2" src={contactimg}/>
                            <div className="md:w-1/2 w-full">
                                <div className="grid grid-cols-6 w-full md:gap-7 gap-4">
                                    {
                                        inputs.map(obj => {
                                            return (
                                                <input className="p-4 border-2 border-purple-500 focus:outline-none rounded col-span-3" {...obj} required />
                                            )
                                        })
                                    }
                                    <textarea required name="message" className="p-4 border-2 border-purple-500 focus:outline-none rounded col-span-6" placeholder="Message*" />
                                    <button className="col-span-6 bg-purple-500 text-white p-3 py-4 rounded font-semibold md:text-xl border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 duration-300">Send Message</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </main>
            <Testimonials />
        </>
        
    )
}

export default ContactUs;