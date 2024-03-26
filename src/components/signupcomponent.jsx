/* eslint-disable react/prop-types */
import { useState } from "react";
import signImg from "../assets/login.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const inputClass = "w-full p-4 border-2 border-purple-500 focus:outline-none rounded col-span-3";

const InputPart = ({labelText,htmlFor,id,name,type,placeholder}) => {

    console.log(labelText)
    
    return (
        <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium md:text-base text-sm" htmlFor={htmlFor}>{labelText}</label>
            <input className={inputClass} id={id} name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

const OptionPart = ({commonName}) => {
    return (
        <option value={commonName}>
            <span>{commonName}</span>
        </option>
    )
}

const SignUpComponent = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountries = async () => {
            try{
                const res = await fetch("https://restcountries.com/v3.1/all");
                const data = await res.json();

                setCountries(data);
            } catch(err){
                console.log(err);
            }
        }

        getCountries();
    });

    const inputs = [
        {
            label:{
              labelText: "First Name", 
              htmlFor: "firstname" 
            },
            id: "firstname",
            placeholder: "Enter the firstname",
            type: "text",
            name: "firstname"
        },
        {
            label:{
              labelText: "Last Name", 
              htmlFor: "lastname" 
            },
            id: "lastname",
            placeholder: "Enter the lastname",
            type: "text",
            name: "lastname"
        },
        {
            label:{
              labelText: "Username", 
              htmlFor: "username" 
            },
            id: "username",
            placeholder: "Enter username",
            type: "text",
            name: "username"
        },
        {
            label:{
              labelText: "Email Name", 
              htmlFor: "firstname" 
            },
            id: "firstname",
            placeholder: "Enter email",
            type: "email",
            name: "firstname"
        },
        {
            label:{
              labelText: "Password", 
              htmlFor: "password" 
            },
            id: "password",
            placeholder: "Enter password",
            type: "password",
            name: "firstname",
            minLength: 8,
            maxLength: 16
        }
    ]

    return (
        <div className="2xl:container mx-auto flex gap-8 items-center lg:flex-row flex-col md:py-24 py-16 px-3">
            <img className="lg:w-1/2 md:w-5/12 sm:w-1/2" src={signImg} alt="Signup Image"/>
            <form className="lg:w-1/2 md:w-2/3 w-full flex flex-col gap-5">
                {
                    inputs.map(obj => {
                        return (
                            <InputPart type={obj.type} name={obj.name} key={obj.id} labelText={obj.label.labelText} htmlFor={obj.label.htmlFor} id={obj.id} placeholder={obj.placeholder} />
                        );
                    })
                }
                <div className="flex flex-col gap-2">
                    <label htmlFor="countries" className="text-gray-700 font-medium md:text-base text-sm">Choose Country</label>
                    <select id="countires" className={inputClass}>
                        {
                            countries.map(obj => {
                                return (
                                    <OptionPart key={obj.name.common} commonName={obj.name.common}/>
                                )
                            })
                        }
                    </select> 
                </div>
                
                <button className="col-span-6 bg-purple-500 text-white p-3 py-4 rounded font-semibold md:text-xl border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 duration-300">Signup</button>
                <p>Already have an account? <Link>Login</Link></p>
            </form>            
        </div>
    )
}


export default SignUpComponent;