import profileImg from "../assets/personimgs/lukatskhvaradze.png";

import { BarChart, DonutChart, Legend } from '@tremor/react';

import {Link} from "react-router-dom";

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
        title: "Completed Transactions",
        amount: 5500,
        button: "View",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="sm:w-10 sm:h-10 w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    }
]

const chartdata = [
    {
      name: 'Amphibians',
      'Number of threatened species': 2488,
    },
    {
      name: 'Birds',
      'Number of threatened species': 1445,
    },
    {
      name: 'Crustaceans',
      'Number of threatened species': 743,
    },
    {
      name: 'Ferns',
      'Number of threatened species': 281,
    },
    {
      name: 'Arachnids',
      'Number of threatened species': 251,
    },
    {
      name: 'Corals',
      'Number of threatened species': 232,
    },
    {
      name: 'Algae',
      'Number of threatened species': 98,
    },
];

const sales = [
    {
      name: 'New York',
      sales: 980,
    },
    {
      name: 'London',
      sales: 456,
    },
    {
      name: 'Hong Kong',
      sales: 390,
    },
];
const transactions = [
    { date: '2024-01-01', 'Transactions': 500 },
    { date: '2024-01-03', 'Transactions': 200 },
    { date: '2024-01-01', 'Transactions': 1200 },
    { date: '2024-01-01', 'Transactions': 700 },
    { date: '2024-01-01', 'Transactions': 100 },
    { date: '2024-01-01', 'Transactions': 800 },
    { date: '2024-01-01', 'Transactions': 500 },
    { date: '2024-01-01', 'Transactions': 900 },
];
  
  
const dataFormatter = (number) => Intl.NumberFormat('us').format(number).toString();

const valueFormatter = (number) => `$ ${Intl.NumberFormat('us').format(number).toString()}`;

  
const BarChartHero = () => (
    <BarChart
      data={transactions}
      index="date"
      categories={['Transactions']}
      colors={['purple']}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
      onValueChange={(v) => console.log(v)}
    />
);

function DonutChartUsageExample() {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          <DonutChart
            data={cardInfo}
            category="amount"
            index="title"
            valueFormatter={valueFormatter}
            colors={['indigo', 'violet', 'purple', 'blue']}
            className="w-40"
          />
          <Legend
            categories={["Total amount", 'In Money', 'Out Money', "Completed Transactions"]}
            colors={['indigo', 'violet', 'purple', 'blue']}
            className="max-w-xs"
          />
        </div>
      </>
    );
}

const TopDashboard = () => {
    return (
        <div className="w-full flex lg:flex-row flex-col justify-between md:items-center md:gap-0 gap-3"> 
            <p className="lg:text-2xl text-xl"><span className="text-purple-500">Welcome Back</span>, Luka Tskhvaradze</p>
            <div className="flex items-center lg:gap-4 gap-2">
                <img src={profileImg} className="lg:w-14 lg:h-14 w-11 h-11 rounded-full object-cover" />
                <p className="lg:text-2xl text-xl">Luka tskhvaradze</p>
            </div>
        </div>
    )
}

const Card = ({title, amount, button, icon}) => {
    return (
        <div className="w-full flex rounded-md bg-purple-500 justify-between p-5">
            <div className="flex flex-col items-start gap-4 text-white">
                <p>{title}</p>
                <p className="font-medium text-3xl">${amount}</p>
                <button className="bg-white text-purple-500 px-6 py-1 rounded-md font-medium border-2 border-white hover:bg-transparent hover:text-white duration-300">{button}</button>
            </div>
            <div className="lg:w-16 lg:h-16 w-14 h-14 flex justify-center items-center bg-white rounded-full text-purple-500">
                <span>{icon}</span>
            </div>
        </div>
    )
}

const CardsComponent = ({cardInfo}) => {
    return (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 gap-5">
            {
                cardInfo.map((obj, i) => {
                    return (
                        <Card key={i} title={obj.title} amount={obj.amount} button={obj.button} icon={obj.icon}/>
                    )
                })
            }
        </div>
    )
}

const DashboardComponent = () => {
    return (
        <div className="p-8 w-full">
            <div className="flex flex-col gap-5">
                <TopDashboard />
                <CardsComponent cardInfo={cardInfo} />
                <div className="grid grid-cols-4 w-full gap-5">
                    <div className="bg-purple-100 p-5 rounded-lg w-full col-span-3">
                        <BarChartHero></BarChartHero>
                    </div>
                    <div className="bg-purple-100 p-5 rounded-lg">
                        <DonutChartUsageExample></DonutChartUsageExample>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DashboardComponent;