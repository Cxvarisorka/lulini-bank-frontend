import { useContext } from "react"
import TopDashboard from "./dashboardParts/topDashboard"
import { dataContext } from "../../context/dataContext"

// const recipientsInfo = [
//     {
//         fullName: "Mariami Kavtaradze",
//         email: "mariami400@gmail.com",
//         username: "ILoveLuka",
//         country: "Georgia",
//         tel: "555-333-222",
//         city: "Tbilisi",
//         bankNumber: "LB333555666888"
//     },
//     {
//         fullName: "Lile Tskhvaradze",
//         email: "lile300@gmail.com",
//         username: "Lileskona",
//         country: "Georgia",
//         tel: "687-365-122",
//         city: "Kutaisi",
//         bankNumber: "LB444555333222"
//     },
//     {
//         fullName: "Nia Tskhvaradze",
//         email: "nia500@gmail.com",
//         username: "NiakoSlay",
//         country: "Georgia",
//         tel: "123-556-127",
//         city: "Kutaisi",
//         bankNumber: "LB777888111222"
//     }
// ]


const Recipient = ({username, email, fullname, bankNumber, country}) => {
    
    const labels = [
        {
            labeltext: "Username:",  
            labelValue: username
        },
        {
            labeltext: "Account Number:",  
            labelValue: bankNumber
        },
        {
            labeltext: "Email:", 
            labelValue: email 
        },
        {
            labeltext: "Fullname",
            labelValue: fullname
        },
        {
            labeltext: "Country",
            labelValue: country
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
                    <p className="lg:text-2xl text-lg font-bold">{fullname}</p>
                </div>
                <p className="lg:text-2xl text-lg font-bold">Lulini Bank</p>
            </div> 
            <div className="flex flex-col lg:gap-3 gap-2">
                {
                    labels.map((obj, i) => {
                        return (
                            <div key={i} className="flex flex-col lg:gap-3 gap-2">
                                <div className="w-full flex justify-between" key={obj.bankNumber}>
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
    const {account} = useContext(dataContext);

    console.log(account, 'xd')
    return (
        <div className="w-full flex flex-col gap-8 h-full">
            <div className="h-full flex justify-center items-center flex-col xl:gap-8 gap-4">
                {account?.recipients?.length > 0 ?
                    <div className="flex flex-col gap-3 w-full">
                        {
                            account.recipients.map((obj, i) => {
                                return (
                                    <Recipient key={i} {...obj} />
                                )
                            })
                        }
                    </div>
                :
                    <p className="text-8xl font-bold text-purple-500">Nothing is here</p>
            
                }
                
            </div>
        </div>
    )
}

export default Recipients;