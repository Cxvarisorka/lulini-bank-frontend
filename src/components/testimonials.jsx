import lukaImg from "../assets/personimgs/lukatskhvaradze.png";
import valeriImg from "../assets/personimgs/valeritskhvaradze.png";
import likaImg from "../assets/personimgs/likajulakidze.jpg";
import lileImg from "../assets/personimgs/liletskhvaradze.png";
import niaImg from "../assets/personimgs/niatskhvaradze.jpg";
import mariImg from "../assets/personimgs/marikavtaradze.png";

const data = [
    {
        fullname: "Luka Tskhvaradze",
        position: "CEO - Founder",
        img: lukaImg
    },
    {
        fullname: "Mari Kavtaradze",
        position: "CEO - Founder",
        img: mariImg
    },
    {
        fullname: "Valeri Tskhvaradze",
        position: "CO - Founder",
        img: valeriImg
    },
    {
        fullname: "Lika Julakidze",
        position: "CO - Founder",
        img: likaImg
    },
    {
        fullname: "Lile Tskhvaradze",
        position: "CTO - Chief Technology Officer",
        img: lileImg
    },
    {
        fullname: "Nia Tskhvaradze",
        position: "Manager",
        img: niaImg
    },
    
]

const Testimonial = ({fullname,position,img}) => {
    return (
        <div className="flex flex-col gap-5 p-5 rounded-xl bg-white hover:bg-purple-500 hover:text-white duration-300 text-gray-700">
            <p className="text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis corporis at fugiat nam voluptates illum eius officiis commodi ratione accusantium dolorum mollitia suscipit.</p>
            <div className="flex gap-3 items-center">
                <img className="w-16 h-16 rounded-full object-cover" src={img} alt={fullname}/>
                <div className="flex flex-col">
                    <p className="font-bold">{fullname}</p>
                    <p className="font-semibold">{position}</p>
                </div>
            </div>
        </div>
    )
}

const Testimonials = () => {
    return (
        <div className="w-full flex justify-between px-3 bg-gradient-to-r from-purple-200 to-purple-50">
            <div className="2xl:container mx-auto md:py-24 py-16 flex flex-col items-center gap-12 px-3">
                <div className="flex flex-col">
                    <div className='flex flex-col gap-5 text-center'>
                        <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">STAFF TESTIMONIALS</p>
                        <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">What Our Staff Says</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
                    {
                        data.map(obj => {
                            return (
                                <Testimonial key={obj.fullname} fullname={obj.fullname} position={obj.position} img={obj.img}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    )
}

export default Testimonials;