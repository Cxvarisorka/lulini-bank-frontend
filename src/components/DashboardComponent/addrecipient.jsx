import React, { useContext, useState } from "react";
import { MainInfoContext } from "../../context/mainFetchInfo";
import { dataContext } from "../../context/dataContext";

const inputs = [
  {
    labelText: "Username",
    placeholder: "Lukacxvari11",
    type: "text",
  },
  {
    labelText: "Email",
    placeholder: "lcxvaradzee400@gmail.com",
    type: "email",
  }
];

const inputClass =
  "p-3 border focus:outline-none rounded-lg border-black w-full";

const AddRecipient = () => {
  const { addRecipient } = useContext(dataContext);

  const [formData, setFormData] = useState({
    username: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, e.target)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addRecipient({...formData});
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-8 bg-purple-100 rounded-lg">
        <form onSubmit={(e) => handleFormSubmit(e)} className="w-full flex flex-col p-5 gap-8">
            <p className="lg:text-2xl text-xl">Add Recipient</p>
            <div className="flex flex-col gap-5">
                {inputs.map((input, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <label className="lg:text-lg">{input.labelText} <span className="text-red-600">*</span></label>
                        <input
                        className={inputClass}
                        name={input.labelText.toLowerCase()}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={formData[input.labelText.toLowerCase()]}
                        onChange={handleInputChange}
                        required
                        />
                    </div>
                ))}
                
          
            </div>
            <button className="bg-purple-500 text-white p-3 rounded-lg text-lg">Add Recipient</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipient;
