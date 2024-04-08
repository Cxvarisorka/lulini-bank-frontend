import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {MainInfoProvider} from './context/mainFetchInfo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainInfoProvider>
      <App />
    </MainInfoProvider>
    
  </BrowserRouter>
)
