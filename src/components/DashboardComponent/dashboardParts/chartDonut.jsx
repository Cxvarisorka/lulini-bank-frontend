import dataFormatter from "./dataFormater.jsx";

import { BarChart, DonutChart, Legend } from '@tremor/react';


const Donut = ({cardInfo}) => {
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
  console.log(color)
  return (
    <>
      <BarChart
          data={transactions}
          index="date"
          categories={categories}
          colors={[color]}
          valueFormatter={dataFormatter}
          yAxisWidth={48}
          onValueChange={(v) => console.log(v)}
        />
    </>
  )
};

const ChartDonut = ({transactions, cardInfo}) => {
    const inTransactions = transactions?.filter(obj => {
      if (obj.type == 'in') return { 'in': obj.amount, date: obj.date };
    });
    const outTransactions = transactions?.filter(obj => {
      if (obj.type == 'out') return { 'out': obj.amount, date: obj.date };
    });

    console.log(outTransactions)
    return (
        <div className="grid xl:grid-cols-4 w-full lg:gap-8 gap-4">
            <div className="bg-purple-100 p-5 rounded-lg w-full xl:col-span-3 flex flex-col gap-4">
                <BarChartHero transactions={inTransactions} categories={['in']} color={'green'}/>
                <BarChartHero transactions={outTransactions} categories={['out']} color={'red'}/>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg">
                <Donut cardInfo={cardInfo}/>
            </div>
        </div>
    )
}

export default ChartDonut;