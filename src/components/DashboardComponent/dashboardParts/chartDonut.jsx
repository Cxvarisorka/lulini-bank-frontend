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


const BarChartHero = ({transactions}) => (
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

const ChartDonut = ({transactions, cardInfo}) => {
    return (
        <div className="grid xl:grid-cols-4 w-full lg:gap-8 gap-4">
            <div className="bg-purple-100 p-5 rounded-lg w-full xl:col-span-3">
                <BarChartHero transactions={transactions}/>
            </div>
            <div className="bg-purple-100 p-5 rounded-lg">
                <Donut cardInfo={cardInfo}/>
            </div>
        </div>
    )
}

export default ChartDonut;