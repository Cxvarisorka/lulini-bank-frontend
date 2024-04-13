import { useContext, useState } from "react";
import { TopDashboard } from "./dashboardComponent";
import { MainInfoContext } from "../context/mainFetchInfo";

const SendForm = ({formData, handleInputChange, countries, rates}) => {

    const inputClass = "p-3 w-full rounded-lg";

    return (
        <form className="flex xl:col-span-4 lg:col-span-3 flex-col gap-8 bg-purple-50 p-8 rounded-lg">
                <p className="lg:text-xl text-lg">Send Money</p>
                <div className="flex w-full flex-col gap-2">
                        <label className=" lg:text-base text-sm" htmlFor="send">Sending Country</label>
                        <select className={inputClass} id="send" name="sendingCountry" onChange={(e) => handleInputChange(e)} value={formData.sendingCountry}>
                            {
                                countries.map((obj, i) => {
                                    return (
                                        <option key={i} value={obj.name.common}>{obj.name.common}</option>
                                    )
                                })
                            }
                        </select>
                </div>
                <div className="flex w-full flex-col gap-2">
                        <label className=" lg:text-base text-sm" htmlFor="receive">Receiving Country</label>
                        <select className={inputClass} id="receive" name="receivingCountry" onChange={(e) => handleInputChange(e)} value={formData.receivingCountry}>
                            {
                                countries.map((obj, i) => {
                                    return (
                                        <option key={i} value={obj.name.common}>{obj.name.common}</option>
                                    )
                                })
                            }
                        </select>
                </div>
                <div className="flex w-full flex-col gap-2">
                        <label className=" lg:text-base text-sm" htmlFor="sender">Sender's Currency</label>
                        <select className={inputClass} id="sender" name="senderCurrency" onChange={(e) => handleInputChange(e)} value={formData.senderCurrency}>
                                {
                                    rates.map((obj, i) => {
                                        return (
                                            <option key={i} value={obj[0]}>{obj[0]}</option>
                                        )
                                    })
                                }
                        </select>
                </div>
                <div className="flex w-full flex-col gap-2">
                        <label className=" lg:text-base text-sm" htmlFor="recipient">Recipient's Currency</label>
                        <select className={inputClass} id="recipient" name="recipientCurrency" onChange={(e) => handleInputChange(e)} value={formData.recipientCurrency}>
                                {
                                    rates.map((obj, i) => {
                                        return (
                                            <option key={i} value={obj[0]}>{obj[0]}</option>
                                        )
                                    })
                                }
                        </select>
                </div>   
                <div className="flex w-full flex-col gap-2">
                        <label className=" lg:text-base text-sm">Sender's Amount</label>
                        <input className={inputClass} onChange={(e) => handleInputChange(e)} value={formData.senderAmount} type="number" placeholder="Enter Amount" name="senderAmount" required/> 
                </div>
                <div className="flex w-full flex-col gap-2">
                    <label className=" lg:text-base text-sm" htmlFor="recipientInformation">Recipient Information</label>
                    <select className={inputClass} id="recipientInformation" name="recipientInformation" value={formData.recipientInformation} onChange={(e) => handleInputChange(e)}>
                        {
                            recipientInfo.map((obj, i) => {
                                return (
                                    <option key={i} value={obj.email}>
                                        {obj.fullName} - {obj.email}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className="bg-purple-500 text-white   p-2 rounded-lg lg:text-xl">Send Money</button>
        </form>
    )
}

const SendPreview = ({senderAmount, fromCountry, toCountry}) => {
    const { convertCurrency } = useContext(MainInfoContext);
    console.log(fromCountry, toCountry)
    const fee = 2;
    const [ result ] = convertCurrency(fromCountry, toCountry, Number(senderAmount) - fee);
    

    return (
        <div className="p-8 xl:col-span-2 lg:col-span-3 bg-purple-50 rounded-lg lg:h-96">
            <div className="flex flex-col gap-8">
                <p className="lg:text-xl text-lg">Preview</p> 
                <hr></hr>
                <div className="flex justify-between">
                    <p className="lg:text-base text-sm">Sending Amount</p>
                    <p className="lg:text-base text-sm">{senderAmount} {fromCountry}</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <p className="lg:text-base text-sm">Fees</p>
                    <p className="lg:text-base text-sm">2 {fromCountry}</p>
                </div>
                <hr></hr>
                <div className="flex justify-between">
                    <p className="lg:text-base text-sm">Recipient's Will Get</p>
                    <p className="lg:text-base text-sm">{result} {toCountry}</p>
                </div>
            </div>
        </div>
    )
}

const recipientInfo = [
    {
        fullName: "Lile Tskhvaradze",
        email: "liletskhvaradze@gmail.com"
    },
    {
        fullName: "Nia Tskhvaradze",
        email: "niatskhvaradze@gmail.com"
    },
    {
        fullName: "Mariam Kavtaradze",
        email: "mariamikavtaradze@gmail.com"
    }
]

const SendMoney = () => {
    const {countries, rates, userCountry} = useContext(MainInfoContext);

    const [formData, setFormData] = useState({
        sendingCountry: userCountry,
        receivingCountry: "Cyprus",
        senderAmount: "0",
        senderCurrency: "USD",
        recipientCurrency: "USD",
        recipientInformation: recipientInfo[0].fullName + " - " + recipientInfo[0].email
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(formData)
    };

    return (
        <div className="w-full p-8 flex flex-col gap-8">
            <TopDashboard />
            <div className="grid lg:grid-cols-6 xl:gap-8 gap-4">
                <SendForm formData={formData} handleInputChange={handleInputChange} countries={countries} rates={rates}/>
                <SendPreview senderAmount={formData.senderAmount} fromCountry={formData.senderCurrency} toCountry={formData.recipientCurrency}/>
            </div>
        </div>
        
    )
}

export default SendMoney;