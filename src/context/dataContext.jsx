import { createContext, useState } from "react";

const dataContext = createContext();

const users = [];

const DataProvider = ({children}) => {
    const [account, setAccount] = useState()

    const registerFunc = (registerInfo) => {
        const accountExsist = users.findIndex(acc => acc.username === registerInfo.username || acc.email === registerInfo.email);

        if(accountExsist === -1){
            users.push(registerInfo);
            return true;
        }

        return false;
    }

    const loginFunc = (loginInfo) => {
        const accountDoc = users.find(acc => acc.email === loginInfo.email);

        if(!accountDoc) return false;

        if(accountDoc.password === loginInfo.password) {
            setAccount(accountDoc)
            return accountDoc
        }
    }
    
    return (
        <dataContext.Provider value={{registerFunc, loginFunc, account}}>
            {children}
        </dataContext.Provider>
    )
}

export { DataProvider, dataContext };