import { createContext, useState, useEffect } from "react";

const MainInfoContext = createContext();

const MainInfoProvider = ({children}) => {
    const [rates,setRates] = useState();

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



    // const convertCurrency = ({fromCountry,toCountry, setConvertedValue, setExchangeRateText}) => {
    //     const fromCurrencyRate = rates.find(([code]) => code === fromCountry)[1];
    //     const toCurrencyRate = rates.find(([code]) => code === toCountry)[1];
        
    //     const inputValue = 1; 
    //     const result = (inputValue / fromCurrencyRate) * toCurrencyRate;

    //     setConvertedValue(result.toFixed(2));
    //     setExchangeRateText(`1 ${fromCountry.current.value} = ${result.toFixed(2)} ${toCountry.current.value}`);
    // };

    return (
        <MainInfoContext.Provider value={{ rates }}>
            {children}
        </MainInfoContext.Provider>
    )
}

export { MainInfoProvider, MainInfoContext };