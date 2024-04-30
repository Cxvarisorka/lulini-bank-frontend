import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const dataContext = createContext();

const users = [];

const DataProvider = ({children}) => {
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();

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
            setAccount(accountDoc);
            return accountDoc;
        }
    }

    // const addRecipient = (account, recipientInfo) => {
    //     account.recipients.push(recipientInfo);
    // }
    
    const logoutFunc = () => {
        setAccount(null);
        navigate('/signin');
    }

    const changePassword = (newPassword, logout) => {
        setAccount((curValue) => ({...curValue, password: newPassword}));
        if(logout) logoutFunc();
    }
    
    return (
        <dataContext.Provider value={{registerFunc, loginFunc, account, logoutFunc, changePassword}}>
            {children}
        </dataContext.Provider>
    )
}

export { DataProvider, dataContext };