import { useContext, useRef } from "react";
import { dataContext } from "../../../context/dataContext";

const RequestLoan = ({account}) => {
    const {requestLoan} = useContext(dataContext);
    const amount = useRef(null);
    const password = useRef(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      const amountValue = amount.current.value;
      const isNumeric = /^\d+$/.test(amountValue);

      if (!isNumeric) {
        console.log('Amount must contain only numbers');
        return;
      }
  
      requestLoan(parseInt(amount.current.value), password.current.value, new Date())
    }
  
    return (
      <div className="flex bg-purple-100 flex-col gap-8 p-5 rounded-lg">
        <p className="lg:text-2xl text-xl">Request Loan</p>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label className="text-lg" htmlFor="loan">Enter Amount <span className="text-red-500">*</span></label>
            <input ref={amount} className="rounded-lg p-3" id="loan" type="number" required />
          </div>
          <div className="flex flex-col gap-3">
            <label className="text-lg" htmlFor="loanPass">Enter Your Password <span className="text-red-500">*</span></label>
            <input ref={password} className="rounded-lg p-3" id="loanPass" type="password" required />
          </div>
          <button className="bg-purple-500 text-white p-3 rounded-lg text-lg">Request</button>
        </form>
      </div>
    )
}

export default RequestLoan;