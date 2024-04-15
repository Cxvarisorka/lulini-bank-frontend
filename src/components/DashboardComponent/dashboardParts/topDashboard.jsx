import profileImg from "../../../assets/personimgs/lukatskhvaradze.png";


const TopDashboard = ({userName}) => {
    return (
        <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center lg:gap-0 gap-3"> 
            <p className="lg:text-2xl text-xl"><span className="text-purple-500">Welcome Back</span>, {userName}</p>
            <div className="flex items-center lg:gap-4 gap-2">
                <img src={profileImg} className="lg:w-14 lg:h-14 w-11 h-11 rounded-full object-cover" />
                <p className="lg:text-2xl text-xl">{userName}</p>
            </div>
        </div>
    )
}

export default TopDashboard;