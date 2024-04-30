import React, { useContext, useState } from "react";
import { MainInfoContext } from "../../context/mainFetchInfo";

const inputs = [
  {
    labelText: "Fullname",
    placeholder: "Luka Tskhvaradze",
    type: "text",
  },
  {
    labelText: "Username",
    placeholder: "Lukacxvari11",
    type: "text",
  },
  {
    labelText: "Email",
    placeholder: "lcxvaradzee400@gmail.com",
    type: "email",
  },
  {
    labelText: "Phone",
    placeholder: "(+995) 555 444 222",
    type: "tel",
  },
  {
    labelText: "City",
    placeholder: "Tbilisi",
    type: "text",
  },
  {
    labelText: "Address",
    placeholder: "GEO, Tbilisi, Agmasheneblis 82",
    type: "text",
  },
  {
    labelText: "Image",
    type: "file",
  },
];

const inputClass =
  "p-4 border focus:outline-none rounded-lg border-black w-full";

const AddRecipient = () => {
  const { countries } = useContext(MainInfoContext);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    image: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, e.target)
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(formData);

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-8 bg-purple-50">
        <form className="w-full flex flex-col p-8 gap-8">
            <p className="lg:text-xl text-lg">Add Recipient</p>
            <div className="grid lg:grid-cols-2 gap-8">
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
                <div className="flex flex-col gap-4">
                    <label className="lg:text-lg">Country <span className="text-red-600">*</span></label>
                    {countries.length > 0 ? (
                        <select
                        id="countries"
                        className={inputClass}
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        >
                        {countries.map((obj) => (
                            <option key={obj.name.common}>{obj.name.common}</option>
                        ))}
                        </select>
                    ) : (
                        "Loading..."
                )}
            </div>
          
            </div>
            <button className="md:text-lg text-white font-medium bg-purple-500 p-4 rounded-lg w-full">Add Recipient</button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipient;
