import { createContext, useState, useEffect } from "react";

const MainInfoContext = createContext();

const MainInfoProvider = ({children}) => {
    const [rates,setRates] = useState([]);
    const [countries, setCountries] = useState([]);
    const userCountry = "Georgia";

    useEffect(() => {
        const getData = async (base = "USD") => {
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
            const data = await res.json();
            setRates(Object.entries(data.rates));
        } catch (err) {
            console.log(err);
        }
        
    };
        getData();
    }, []);

    useEffect(() => {
        const getCountries = async () => {
          try {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
    
            setCountries(data);
          } catch (err) {
            console.log(err);
          }
        };
    
        getCountries();
    }, []);



    const convertCurrency = (fromCountry,toCountry, inputValue = 1) => {
        console.log(fromCountry, toCountry)
        const fromCurrencyRate = rates.find(([code]) => code === fromCountry)?.[1];

        const toCurrencyRate = rates.find(([code]) => code === toCountry)?.[1];

        
        const result = (inputValue / fromCurrencyRate) * toCurrencyRate;

        return [result.toFixed(2), `${inputValue} ${fromCountry} = ${result.toFixed(2)} ${toCountry}`];
        
    };

    return (
        <MainInfoContext.Provider value={{ rates, convertCurrency, countries, userCountry }}>
            {children}
        </MainInfoContext.Provider>
    )
}

export { MainInfoProvider, MainInfoContext };