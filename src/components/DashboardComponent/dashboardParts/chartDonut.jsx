import dataFormatter from "./dataFormater.jsx";

import { BarChart, DonutChart, Legend } from '@tremor/react';


const Donut = ({cardInfo}) => {
  console.log(cardInfo)
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-5 h-full">
          <DonutChart
            data={cardInfo}
            category="amount"
            index="title"
            valueFormatter={dataFormatter}
            colors={['indigo', 'violet', 'purple', 'blue']}
            className="w-40"
            variant="pie"
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


const BarChartHero = ({transactions, categories, color}) => {

  return (
    <>
      <BarChart
          data={transactions}
          index="date"
          categories={categories}
          colors={color}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
          onValueChange={(v) => console.log(v)}
        />
    </>
  )
};

const ChartDonut = ({transactions, cardInfo}) => {

  console.log(transactions)
    // const inTransactions = transactions?.map(obj => {
    //   if (obj.type == 'in') return { 'in': obj.amount, date: obj.date };
    // }).filter(item => item != undefined).slice(-5);

    // const outTransactions = transactions?.map(obj => {
    //   if (obj.type == 'out') return { 'out': obj.amount, date: obj.date };
    // }).filter(item => item != undefined).slice(-5);

    // const filteredTransactions = transactions?.reduce((acc, obj) => {
    //   if (obj.type === 'in' || obj.type === 'out') {
    //     acc.push({ [obj.type]: obj.amount, date: obj.date });
    //   }
    //   return acc;
    // }, []).slice(-5);

    const myTransactions = transactions?.map(obj => {
      return { "Transaction": obj.type == 'in' ? obj.amount : -obj.amount }
    }).slice(-5)

    console.log(myTransactions)
  
    return (
        <div className="grid xl:grid-cols-4 w-full lg:gap-8 gap-4">
            <div className="bg-purple-100 p-5 rounded-lg w-full xl:col-span-3 flex flex-col gap-4">
                {/* <BarChartHero transactions={filteredTransactions} categories={['in', 'out']} color={['green', 'red']}/>  */}

                <BarChartHero transactions={myTransactions} categories={['Transaction']} color={['purple']}/> 

                {/* <BarChartHero transactions={outTransactions} categories={['out']} color={['red']}/>  */}
                
            </div>
            <div className="bg-purple-100 p-5 rounded-lg">
                <Donut cardInfo={cardInfo}/>
            </div>
        </div>
    )
}

export default ChartDonut;