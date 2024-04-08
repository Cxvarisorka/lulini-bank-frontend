import { useEffect, useRef, useState } from "react";

const Option = ({ code, value }) => {
    return (
        <option value={code}>{code} {value}</option>
    );
};

const Converter = () => {
    const [rates, setRates] = useState([]);
    const [convertedValue, setConvertedValue] = useState(0);
    const [exchangeRateText, setExchangeRateText] = useState("");
    const fromCountry = useRef(null);
    const toCountry = useRef(null);

    const getData = async (base = "USD") => {
        try {
            const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${base}`);
            const data = await res.json();
            setRates(Object.entries(data.rates));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const convertCurrency = () => {
        const fromCurrencyRate = rates.find(([code]) => code === fromCountry.current.value)[1];
        const toCurrencyRate = rates.find(([code]) => code === toCountry.current.value)[1];
        const inputValue = 1; 
        const result = (inputValue / fromCurrencyRate) * toCurrencyRate;
        setConvertedValue(result.toFixed(2));
        setExchangeRateText(`1 ${fromCountry.current.value} = ${result.toFixed(2)} ${toCountry.current.value}`);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        convertCurrency();
    };

    return (
        <form onSubmit={handleSubmit} className="sm:w-1/3 w-full h-full bg-white rounded-3xl shadow-md gap-10 p-5 flex flex-col justify-between">
            <div className="bg-purple-500 rounded-md py-5 flex flex-col justify-center items-center gap-2 text-white">
                <p className="font-bold lg:text-2xl text-xl">Exchange Rate</p>
                <p className="font-medium lg:text-xl text-md">{exchangeRateText}</p>
            </div>
            <div className="flex flex-col justify-between gap-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="send" className="lg:text-lg font-medium">From Country</label>
                    <select ref={fromCountry} style={{ border: 'black 1px solid' }} id="send" className="py-3 border-black rounded-md outline-none">
                        {rates.length > 0 ? rates.map(([code, value]) => <Option key={code} code={code} value={value} />) : <option>Loading...</option>}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="lg:text-lg font-medium" htmlFor="recive">To Country</label>
                    <select ref={toCountry} style={{ border: 'black 1px solid' }} className="py-3 border-black rounded-md outline-none" id="recive">
                        {rates.length > 0 ? rates.map(([code, value]) => <Option key={code} code={code} value={value} />) : <option>Loading...</option>}
                    </select>
                </div>
            </div>
            <button type="submit" className="bg-purple-500 p-3 rounded-md text-white font-semibold lg:text-lg">Convert</button>
            {convertedValue > 0 && (
                <div className="bg-green-200 rounded-md p-3 text-green-800">
                    <p className="font-medium lg:text-lg text-md">Converted Value: {convertedValue} {toCountry.current.value}</p>
                </div>
            )}
        </form>
    );
};

export default Converter;