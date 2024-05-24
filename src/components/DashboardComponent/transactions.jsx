import { useContext, useState } from "react";
import { dataContext } from "../../context/dataContext";
import { MainInfoContext } from "../../context/mainFetchInfo";
import moment from 'moment';

const TransactionComponent = ({ name, type, amount, date, process, from, to , convertCurrency}) => {
    const convertedValue = convertCurrency(from, to, amount);

    console.log(date)
  
    return (
        <div className="text-white flex sm:flex-row flex-col justify-between p-5 rounded-lg sm:items-center bg-purple-500 sm:gap-0 gap-2">
            <div className="flex flex-col gap-2">
                <p className="lg:text-xl text-lg font-bold">{name}</p>
                <p>{moment(date).fromNow()}</p>
                <p className="lg:text-xl text-lg font-medium">{process}</p>
            </div>
            <div className="flex flex-col gap-2 items-end">
                <p className="lg:text-2xl text-lg">{type === "in" ? "Received: " : "Sent: "} {amount} {from}</p>
                <p className="lg:text-lg">{type === "in" ? "Recipient Sent: " : "Recipient Received: "} {convertedValue[0]} {to}</p>
            </div>
        </div>
    )
}

const Transactions = () => {
    const { account } = useContext(dataContext);
    const { rates, convertCurrency } = useContext(MainInfoContext);

    const [currentPage, setCurrentPage] = useState(1);
    const transactionsPerPage = 5;

    // Calculate the transactions to display
    const indexOfLastTransaction = currentPage * transactionsPerPage;
    const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
    const currentTransactions = account?.transactions?.slice(indexOfFirstTransaction, indexOfLastTransaction);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate the total number of pages
    const totalPages = Math.ceil((account?.transactions?.length || 0) / transactionsPerPage);

    return (
        <div className="flex flex-col gap-8">
            <div className="w-full flex lg:flex-row flex-col justify-between lg:gap-0 gap-3">
                <p className="lg:text-2xl text-xl">Transactions</p>
            </div>
            <div className="flex flex-col gap-4">
                {!rates ? "Loading..." :
                    currentTransactions?.map((obj, i) => (
                        <TransactionComponent {...obj} key={i} convertCurrency={convertCurrency} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-4">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-700'} rounded`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};


export default Transactions;