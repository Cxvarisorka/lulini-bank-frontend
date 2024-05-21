import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create a context for managing user data
const dataContext = createContext();


// Component for providing data context to the application
const DataProvider = ({ children }) => {
    // State to store the current user account
    const [account, setAccount] = useState(null);
    const [users, setUsers] = useState([]);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    const updateLocalStorage = (account, users) => {
        localStorage.setItem('accounts', JSON.stringify(users));
        localStorage.setItem('account', JSON.stringify(account));
    }

    const generateBankNumber = () => {
        let bankNumber = 'LB'; // Assuming the bank number starts with 'GE'
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        for (let i = 0; i < 14; i++) {
            bankNumber += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    
        return bankNumber;
    }
    

    // Function to register a new user account
    const registerFunc = (registerInfo) => {
        // Check if an account with the same username or email already exists
        const accountExists = users.findIndex(
            acc => acc.username === registerInfo.username || acc.email === registerInfo.email || acc.tel === registerInfo.tel
        );

        // If account does not exist, add it to the users array

        // const date = new Date().toISOString().split('T')[0];

        if (accountExists === -1) {
            registerInfo.transactions = [
                // {
                //     name: "Mariam Kavtaradze",
                //     type: "out",
                //     amount: 1000,
                //     date: new Date().toDateString(),
                //     process: "Completed",
                //     from: "GEL",
                //     to: "USD"
                //   },
                //   {
                //     name: "Lile Tskhvaradze",
                //     type: "in",
                //     amount: 800,
                //     date: new Date().toDateString(),
                //     process: "Completed",
                //     from: "USD",
                //     to: "GEL",
                //   },
                //   {
                //     name: "Nia Tskhvaradze",
                //     type: "out",
                //     amount: 400,
                //     date: new Date().toDateString(),
                //     process: "Completed",
                //     from: "GEL",
                //     to: "GEL"
                //   },
                //   {
                //     name: "Lika Julakidze",
                //     type: "out",
                //     amount: 1000,
                //     date: new Date().toDateString(),
                //     process: "Cancelled",
                //     from: "GEL",
                //     to: "GEL"
                //   },
                //   {
                //     name: "Valeri Tskhvaradze",
                //     type: "in",
                //     amount: 300,
                //     date: new Date().toDateString(),
                //     process: "Completed",
                //     from: "EUR",
                //     to: "GEL"
                //   },
            ]
            registerInfo.bankNumber = generateBankNumber();
            localStorage.setItem('accounts', JSON.stringify([...users, registerInfo]));
            setUsers(prevUsers => [...prevUsers, registerInfo]);
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
            localStorage.setItem('account', JSON.stringify(accountDoc));
            setAccount(accountDoc);
            return accountDoc;
        }
    }

    // Function to logout the current user
    const logoutFunc = () => {
        // Clear the current account from state
        setAccount(null);
        localStorage.setItem('account', '');
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

        updateLocalStorage(account, users);

        // Logout if specified
        if (logout) logoutFunc();

        // Return success
        return { success: true };
    }

    const requestLoan = (amount, password, date) => {
        

        if(password != account.password) return { success: false, error: 'Current password is incorrect.' };
        // Find the index of the account in the users array
        const accountIndex = users.findIndex(acc => acc.email === account.email);

        // const newDate = date.toISOString().split('T')[0];

        // Update the transactions in the account state
        const loan = {
            name: "Loan",
            type: "in",
            amount: amount,
            date: new Date().toDateString(),
            process: "Completed",
            from: "USD",
            to: "USD",
        }

        users[accountIndex].transactions.push({...loan});

        // Update localStorage with the updated users array
        updateLocalStorage({...account}, users)

        setAccount({...users[accountIndex]});

        return { success: true };
    }

    const addRecipient = (recipientInfo) => {
        const accountExists = users.findIndex(
            acc => acc.username === recipientInfo.username && acc.email === recipientInfo.email
        );

        if(accountExists != -1){
            account.recipients.push({...users[accountExists]});
            setAccount({...account});

            updateLocalStorage(account, users)

            return { success: true };
        }
        
        return { success: false, message: "Recipient already added or recipient is not exsist in Lulini Bank" };
    }

    const sendMoney = (formData) => {
        console.log(formData, 'formd')
        const recipientEmail = formData.recipientInformation.email;
        const senderAmount = parseInt(formData.senderAmount, 10);
        const accountExists = users.findIndex(obj => obj.email === recipientEmail);

        if (accountExists === -1) {
            return { success: false, message: "We can't find recipient" };
        }

        const recipientAccount = users[accountExists];

        if (account.amount < senderAmount) {
            return { success: false, message: "Not enough money to complete transactions" };
        }

        // Create a new transaction for the recipient
        const recipientTransaction = {
            name: `${account.firstname} ${account.lastname}`,
            type: "in",
            amount: senderAmount,
            date: new Date().toDateString(),
            process: "Completed",
            from: formData.senderCurrency,
            to: formData.recipientCurrency
        };

        recipientAccount.transactions.push(recipientTransaction);

        // Create a new transaction for the sender
        const senderTransaction = {
            name: `${recipientAccount.firstname} ${recipientAccount.lastname}`,
            type: "out",
            amount: senderAmount,
            date: new Date().toDateString(),
            process: "Completed",
            from: formData.senderCurrency,
            to: formData.recipientCurrency
        };

        account.transactions.push(senderTransaction);

        setAccount({...account});

        setUsers([...users]);

        updateLocalStorage(account, users);

        return { success: true, message: "Transaction completed successfully" };
    }

    useEffect(() => {
        const storedAccount = localStorage.getItem('account');
        const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

        if (storedAccount) {
            const parsedAccount = JSON.parse(storedAccount);
            setAccount(parsedAccount);
            navigate('/dashboard')
        }
        if(storedAccounts){
            setUsers(storedAccounts);
        }
    }, [])


    // Provide the data context value to children components
    return (
        <dataContext.Provider value={{ registerFunc, loginFunc, account, logoutFunc, changePassword, requestLoan, addRecipient, sendMoney }}>
            {children}
        </dataContext.Provider>
    )
}

// Export the DataProvider component and dataContext
export { DataProvider, dataContext };
