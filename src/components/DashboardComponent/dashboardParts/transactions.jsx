import { useContext, useState } from "react";
import { MainInfoContext } from "../../../context/mainFetchInfo";



const TransactionComponent = ({ name, type, amount, date, process, from, to , convertCurrency}) => {
    const convertedValue = convertCurrency(from, to, amount);
  
    return (
        <div className="text-white flex sm:flex-row flex-col justify-between p-5 rounded-lg sm:items-center bg-purple-500 sm:gap-0 gap-2">
            <div className="flex flex-col gap-2">
                <p className="lg:text-xl text-lg font-bold">{name}</p>
                <p>{date}</p>
                <p className="lg:text-xl text-lg font-medium">{process}</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
                <p className="lg:text-2xl text-lg">{type === "in" ? "Received: " : "Sent: "} {amount} {from}</p>
                <p className="lg:text-lg">{type === "in" ? "Recipient Sent: " : "Recipient Received: "} {convertedValue[0]} {to}</p>
            </div>
        </div>
    )
  }
  
  
const TransactionsComponent = ({latesTransactions}) => {
    const {rates, convertCurrency} = useContext(MainInfoContext);

  
    const [convertedValue, setConvertedValue] = useState();
      
    if(!rates && !latesTransactions){
        return (
          <div className="bg-purple-500 p-5 text-3xl font-bold text-white rounded-lg flex justify-center items-center"><p>Loading...</p></div>
        )
    }
  
    
  
    return (
        <div className="flex flex-col gap-8">
            <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-3"> 
            <p className="lg:text-2xl text-xl"><span className="text-purple-500">Latest</span> Transactions</p>
            </div>
            <div className="flex flex-col gap-4">
            {
                !rates ? "Loading..." :
                latesTransactions?.slice(-5)?.map((obj, i) => {
                return (
                    <TransactionComponent {...obj} key={i} convertCurrency={convertCurrency} convertedValue={convertedValue}/>
                )
                })
            }
            </div>
        </div>
    )
}

export default TransactionsComponent;