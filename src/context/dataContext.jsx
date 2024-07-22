import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Create a context for managing user data
const dataContext = createContext();

const serverApi = "https://lulini-bank-backend.onrender.com/api";


// Component for providing data context to the application
const DataProvider = ({ children }) => {
    // State to store the current user account
    const [account, setAccount] = useState(null);
    const [users, setUsers] = useState([]);
    // Hook for programmatic navigation
    const navigate = useNavigate();

    const generateBankNumber = () => {
        let bankNumber = 'LB'; // Assuming the bank number starts with 'GE'
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    
        for (let i = 0; i < 14; i++) {
            bankNumber += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    
        return bankNumber;
    }

    
    const registerFunc = async (registerInfo) => {
        try {
            const response = await fetch(`${serverApi}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...registerInfo, bankNumber: generateBankNumber(), transactions: [], recipients: [] }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert("succes: " + data.message);
                return true;
            } else {
                throw new Error(data.message);
            }
        } catch (err) {
            alert("Error" + err.message); // Use err.message to get the correct error message
        }
    }

    // Function to login a user
    const loginFunc = async (loginInfo) => {
        try {
            const response = await fetch(`${serverApi}/signin`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInfo),
            });
    
            const data = await response.json();
            setAccount(data.account);


            if (response.ok) {
                alert("succes: " + data.message);
                return true;
            } else {
                alert("Error" + data.message);
                return false;
            }
        } catch (err) {
            alert("Error" + 'An error occurred while logging in');
            return false;
        }
    };
    
    // Function to logout the current user
    const logoutFunc = () => {
        // Clear the current account from state
        setAccount(null);
        localStorage.setItem('account', '');
        // Navigate to the signin page
        navigate('/signin');
    }

    // Function to change the password of the current user
    const changePassword = async (currentPassword, newPassword, logout, confirmPassword) => {
        try {
            const response = await fetch(`${serverApi}/changepassword`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({currentPassword, newPassword, account, confirmPassword}),
            });
    
            const data = await response.json();

            setAccount(data.account);
    
            if (response.ok) {
                alert("succes: " + data.message);
                return true;
            } else {
                alert("Error" + data.message);
                return false;
            }
        } catch (err) {
            alert("Error" + 'An error occurred while logging in');
            return false;
        }
    }

    const requestLoan = async (amount, password) => {

        try {
            const loan = {
                name: "Loan",
                type: "in",
                amount: amount,
                date: new Date().toISOString(),
                process: "Completed",
                from: "USD",
                to: "USD",
            }

            const response = await fetch(`${serverApi}/loan`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({password, loan, account}),
            });
    
            const data = await response.json();

            setAccount(data.account);
    
            if (response.ok) {
                alert("succes: " + data.message);
                return true;
            } else {
                alert("Error" + data.message);
                return false;
            }

        } catch (err) {
            alert("Error" + 'An error occurred while logging in');
            return false;
        }
        

        // if(password != account.password){
        //     alert("Error" + "Password is incorrect!")
        //     return { success: false, error: 'Current password is incorrect.' };
        // } 
        // // Find the index of the account in the users array
        // const accountIndex = users.findIndex(acc => acc.email === account.email);

        // // const newDate = date.toISOString().split('T')[0];

        // // Update the transactions in the account state

        // users[accountIndex].transactions.push({...loan});

        // // Update localStorage with the updated users array
        // updateLocalStorage({...account}, users)

        // setAccount({...users[accountIndex]});

        // alert("succes: " + "Loan is succsesfull!")

        // return { success: true };
    }

    const addRecipient = async (recipientInfo) => {
        try {
            const response = await fetch(`${serverApi}/addrecipient`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: recipientInfo.email, username: recipientInfo.username, account }),
            });

            console.log({ email: recipientInfo.email, username: recipientInfo.username, account })
    
            const data = await response.json();
    
            if (response.ok) {
                if (data.account) {
                    setAccount(data.account);
                }
                alert("succes: " + data.message);
                return true;
            } else {
                // Display the error message from the server response
                throw new Error(data.message);
            }
        } catch (err) {
            // Display the error message from the catch block
            alert("Error" + err.message);
            return false;
        }
    }
    

    const sendMoney = async (formData) => {


        try {
            const response = await fetch(`${serverApi}/sendmoney`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({senderEmail:account.email, recipientEmail:formData.recipientInformation.email, senderAmount:parseFloat(formData.senderAmount)})
            })
        } catch(err) {

        }

        // const recipientEmail = formData.recipientInformation.email;
        // const senderAmount = parseInt(formData.senderAmount, 10);
        // const accountExists = users.findIndex(obj => obj.email === recipientEmail);

        // if (accountExists === -1) {
        //     return { success: false, message: "We can't find recipient" };
        // }

        // const recipientAccount = users[accountExists];

        // if (account.amount < senderAmount) {
        //     alert("Error" + "Not enough money to complete transactions")
        //     return { success: false, message:"Not enough money to complete transactions"  };
        // }

        // // Create a new transaction for the recipient
        // const recipientTransaction = {
        //     fullname: account.fullname,
        //     type: "in",
        //     amount: senderAmount,
        //     date: new Date().toUTCString(),
        //     process: "Completed",
        //     from: formData.senderCurrency,
        //     to: formData.recipientCurrency
        // };

        // recipientAccount.transactions.push(recipientTransaction);

        // // Create a new transaction for the sender
        // const senderTransaction = {
        //     fullname: recipientAccount.fullname,
        //     type: "out",
        //     amount: senderAmount,
        //     date: new Date().toUTCString(),
        //     process: "Completed",
        //     from: formData.senderCurrency,
        //     to: formData.recipientCurrency
        // };

        // account.transactions.push(senderTransaction);

        // setAccount({...account});

        // setUsers([...users]);

        // updateLocalStorage(account, users);

        alert("succes: " + "Transaction completed successfully")

        return { success: true, message: "Transaction completed successfully" };
    }

    // useEffect(() => {
    //     const storedAccount = localStorage.getItem('account');
    //     const storedAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

    //     if (storedAccount) {
    //         const parsedAccount = JSON.parse(storedAccount);
    //         setAccount(parsedAccount);
    //         navigate('/dashboard')
    //     }
    //     if(storedAccounts){
    //         setUsers(storedAccounts);
    //     }
    // }, [])


    // Provide the data context value to children components
    return (
        <dataContext.Provider value={{ registerFunc, loginFunc, account, logoutFunc, changePassword, requestLoan, addRecipient, sendMoney }}>
            {children}
        </dataContext.Provider>
    )
}

// Export the DataProvider component and dataContext
export { DataProvider, dataContext };
