import { useState, useEffect, useContext } from "react";
import { dataContext } from "../../context/dataContext";

const InputPart = ({ labelText, type, id, onChange, value }) => {
    return (
        <div className="flex flex-col gap-3">
        <label htmlFor={id}>{labelText}</label>

        <input
            onChange={onChange}
            value={value}
            name={id}
            className={`${type == 'checkbox' ? 'p-3': 'p-4'} border focus:outline-none rounded-lg border-black `}
            id={id}
            type={type}
            
        />
        </div>
    );
};

const ChangePassword = () => {
    const {changePassword} = useContext(dataContext);
    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        logout: false, // Added logout field to formData
    });


    const inputs = [
        {
            labelText: "Current Password*",
            type: "password",
            id: "currentPassword",
        },
        {
            labelText: "New Password*",
            type: "password",
            id: "newPassword"
        },
        {
            labelText: "Confrim Password*",
            type: "password",
            id: "confirmPassword"
        },
        {
            labelText: "Logout From Account",
            type: "checkbox",
            id: "logout"
        }
    ]

    const handleInputChange = (e) => {
        const { name, value, type } = e.target;

        setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? e.target.checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        changePassword(formData.currentPassword, formData.newPassword, formData.logout);
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)} className="md:w-4/6 bg-purple-50 p-8 flex flex-col gap-8 rounded-lg">
            <p className="lg:text-xl text-lg">Change Password</p>
            <div className="flex flex-col gap-5">
                {inputs.map((obj) => (
                <InputPart
                    key={obj.id}
                    {...obj}
                    onChange={handleInputChange}
                    value={formData[obj.id]}
                />
                ))}
            </div>
            <button className="bg-purple-500 p-4 rounded-lg text-white">Change</button>
        </form>
    );
};

export default ChangePassword;
