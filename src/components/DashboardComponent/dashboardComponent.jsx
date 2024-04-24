import TopDashboard from "./dashboardParts/topDashboard.jsx";
import CardsComponent from "./dashboardParts/cards.jsx";
import TransactionsComponent from "./dashboardParts/transactions.jsx";
import RequestLoan from "./dashboardParts/requestLoan.jsx";

import ChartDonut from "./dashboardParts/chartDonut.jsx";
import { useContext, useEffect } from "react";
import { dataContext } from "../../context/dataContext.jsx";
import { useNavigate } from "react-router-dom";


const cardInfo = [
    {
        title: "Total Amount",
        amount: 5500,
        button: "Add",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg> 
    },
    {
        title: "In Money",
        amount: 7500,
        button: "View",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
    },
    {
        title: "Out Money",
        amount: 2000,
        button: "View",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
        </svg>
    },
    {
        title: "Completed",
        amount: 5500,
        button: "View",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    }
]

const transactions = [
  { date: '2024-01-01', 'Transactions': 500 },
  { date: '2024-01-03', 'Transactions': 200 },
  { date: '2024-01-01', 'Transactions': 1200 },
  { date: '2024-01-01', 'Transactions': 700 },
  { date: '2024-01-01', 'Transactions': 100 },
];

const latesTransactions = [
  {
    name: "Mariam Kavtaradze",
    type: "Send",
    money: 1000,
    date: new Date().toDateString(),
    process: "Completed",
    from: "GEL",
    to: "USD"
  },
  {
    name: "Lile Tskhvaradze",
    type: "Get",
    money: 800,
    date: new Date().toDateString(),
    process: "Completed",
    from: "USD",
    to: "GEL",
  },
  {
    name: "Nia Tskhvaradze",
    type: "Send",
    money: 400,
    date: new Date().toDateString(),
    process: "Completed",
    from: "GEL",
    to: "GEL"
  },
  {
    name: "Lika Julakidze",
    type: "Send",
    money: 1000,
    date: new Date().toDateString(),
    process: "Cancelled",
    from: "GEL",
    to: "GEL"
  },
  {
    name: "Valeri Tskhvaradze",
    type: "Get",
    money: 300,
    date: new Date().toDateString(),
    process: "Completed",
    from: "EUR",
    to: "GEL"
  },
]


const DashboardComponent = () => {
  const {account} = useContext(dataContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!account) navigate("/signin")
  }, [])

  return (
        <div className="w-full">
            <div className="flex flex-col gap-8">
                <CardsComponent cardInfo={cardInfo} />
                <ChartDonut transactions={transactions} cardInfo={cardInfo}/>
                <RequestLoan />
                <TransactionsComponent latesTransactions={latesTransactions}/>
            </div>
        </div>
    )
}


export default DashboardComponent;