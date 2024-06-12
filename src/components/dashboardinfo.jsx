import dashboardImg from "../assets/Screenshot 2024-06-03 173531.png"

const DashboardInfo = () => {
    return (
        <div className="w-full flex justify-between px-3">
            <div className='2xl:container mx-auto flex gap-8 items-center justify-center flex-col py-12'>
                <div className="flex flex-col gap-5  text-center">
                    <p className="uppercase text-purple-500 font-bold xl:text-2xl md:text-xl text-lg">Dashboard</p>
                    <p className="text-gray-700 xl:text-5xl md:text-4xl text-2xl font-bold">Controll Your Transactions With Our Dashboard</p>
                </div>
                <div className=" shadow-md">
                    <img src={dashboardImg}/>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardInfo;