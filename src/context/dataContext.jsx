import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for managing user data
const dataContext = createContext();

// Array to store user account information
const users = [];

// Component for providing data context to the application
const DataProvider = ({ children }) => {
    // State to store the current user account
    const [account, setAccount] = useState(null);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    // Function to register a new user account
    const registerFunc = (registerInfo) => {
        // Check if an account with the same username or email already exists
        const accountExists = users.findIndex(
            acc => acc.username === registerInfo.username || acc.email === registerInfo.email
        );

        // If account does not exist, add it to the users array

        const date = new Date().toISOString().split('T')[0];

        if (accountExists === -1) {
            registerInfo.transactions = [
                {type: 'out', amount: 120, date},
                {type: 'in', amount: 500, date},
                {type: 'out', amount: 320, date},
                {type: 'in', amount: 1000, date},
            ]
            users.push(registerInfo);
            return true;
        }

        // Return false if account already exists
        return false;
    }

    // Function to login a user
    const loginFunc = (loginInfo) => {
        // Find the account with the provided email
        const accountDoc = users.find(acc => acc.email === loginInfo.email);

        // If account not found, return false
        if (!accountDoc) return false;

        // If password matches, set the account in state and return it
        if (accountDoc.password === loginInfo.password) {
            setAccount(accountDoc);
            return accountDoc;
        }
    }

    // Function to logout the current user
    const logoutFunc = () => {
        // Clear the current account from state
        setAccount(null);
        // Navigate to the signin page
        navigate('/signin');
    }

    // Function to change the password of the current user
    const changePassword = (currentPassword, newPassword, logout) => {
        // Check if the current password matches the account's password
        if (account.password !== currentPassword) {
            return { success: false, error: 'Current password is incorrect.' };
        }

        // Find the index of the account in the users array
        const accountIndex = users.findIndex(acc => acc.email === account.email);

        // Update the password in the users array
        users[accountIndex].password = newPassword;

        // Update the password in the account state
        setAccount((curValue) => ({ ...curValue, password: newPassword }));

        // Logout if specified
        if (logout) logoutFunc();

        // Return success
        return { success: true };
    }

    const requestLoan = (amount, password, date) => {

        if(password != account.password) return { success: false, error: 'Current password is incorrect.' };
        // Find the index of the account in the users array
        const accountIndex = users.findIndex(acc => acc.email === account.email);

        const newDate = date.toISOString().split('T')[0];

        // Update the transactions in the users array
        users[accountIndex].transactions.push({type:'in', amount, date: newDate})

        // Update the transactions in the account state
        setAccount({...users[accountIndex]});

        return { success: true };
    }

    // Provide the data context value to children components
    return (
        <dataContext.Provider value={{ registerFunc, loginFunc, account, logoutFunc, changePassword, requestLoan }}>
            {children}
        </dataContext.Provider>
    )
}

// Export the DataProvider component and dataContext
export { DataProvider, dataContext };
