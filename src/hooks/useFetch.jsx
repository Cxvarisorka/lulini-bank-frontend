import { useEffect, useState } from "react"

const useFetch = (apiUrl) => {
    const [data,setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await fetch(apiUrl);
                const json = await res.json();
                setData(json);
            } catch(err){
                console.log(err);
            }
        }

        fetchData();
    }, []);

    return data;
}

export default useFetch;