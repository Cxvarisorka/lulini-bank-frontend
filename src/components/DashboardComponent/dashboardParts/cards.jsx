import { useContext } from "react"
import { dataContext } from "../../../context/dataContext"

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
    const {account} = useContext(dataContext);
    
    const inMoney = account?.transactions.reduce((acc, cur) => {
        if(cur.type === "in") return acc + cur.amount;
        return acc
    }, 0);
    const outMoney = account?.transactions.reduce((acc, cur) => {
        if(cur.type === "out") return acc + cur.amount;
        return acc
    }, 0);
    const totalAmount = inMoney - outMoney;

    cardInfo[0].amount = totalAmount;
    cardInfo[1].amount = inMoney;
    cardInfo[2].amount = outMoney;

    return (
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-2 lg:gap-8 gap-4">
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

export default CardsComponent;