import TopDashboard from "./dashboardParts/topDashboard"

const recipientsInfo = [
    {
        fullName: "Mariami Kavtaradze",
        email: "mariami400@gmail.com",
        username: "ILoveLuka",
        country: "Georgia",
        phone: "555-333-222",
        city: "Tbilisi",
        accountNumber: "LB333555666888"
    },
    {
        fullName: "Lile Tskhvaradze",
        email: "lile300@gmail.com",
        username: "Lileskona",
        country: "Georgia",
        phone: "687-365-122",
        city: "Kutaisi",
        accountNumber: "LB444555333222"
    },
    {
        fullName: "Nia Tskhvaradze",
        email: "nia500@gmail.com",
        username: "NiakoSlay",
        country: "Georgia",
        phone: "123-556-127",
        city: "Kutaisi",
        accountNumber: "LB777888111222"
    }
]


const Recipient = ({fullName, username, email, phone, country, city, accountNumber}) => {
    
    const labels = [
        {
            labeltext: "Username:",  
            labelValue: username
        },
        {
            labeltext: "Account Number:",  
            labelValue: accountNumber
        },
        {
            labeltext: "Email:", 
            labelValue: email 
        },
        {
            labeltext: "Phone:", 
            labelValue: phone 
        },
        {
            labeltext: "Country:", 
            labelValue: country 
        },
        {
            labeltext: "City:", 
            labelValue: city 
        }
    ]

    return (
        <div className="bg-purple-500 w-full flex p-5 text-white flex-col rounded-lg gap-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center lg:gap-3 gap-2">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.0} stroke="currentColor" className="lg:w-8 lg:h-8 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </span>
                    <p className="lg:text-2xl text-lg font-bold">{fullName}</p>
                </div>
                <p className="lg:text-2xl text-lg font-bold">Lulini Bank</p>
            </div> 
            <div className="flex flex-col lg:gap-3 gap-2">
                {
                    labels.map((obj, i) => {
                        return (
                            <div key={i} className="flex flex-col lg:gap-3 gap-2">
                                <div className="w-full flex justify-between" key={obj.accountNumber}>
                                    <p className="lg:text-xl font-medium">{obj.labeltext}</p>
                                    <p className="lg:text-xl">{obj.labelValue}</p>
                                </div>
                                <hr />
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
    )
}

const Recipients = () => {
    return (
        <div className="w-full flex flex-col gap-8">
            <div className="flex flex-col xl:gap-8 gap-4">
                <div className="flex flex-col gap-3">
                    {
                        recipientsInfo.map((obj, i) => {
                            return (
                                <Recipient key={i} {...obj} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Recipients;