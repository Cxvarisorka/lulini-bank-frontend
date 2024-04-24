import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {MainInfoProvider} from './context/mainFetchInfo.jsx'
import { DataProvider } from './context/dataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataProvider>
      <MainInfoProvider>
        <App />
      </MainInfoProvider>
    </DataProvider>  
  </BrowserRouter>
)
