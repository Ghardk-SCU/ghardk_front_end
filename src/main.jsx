import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthenticationProvider from './Store/Context/Authentication.jsx'
import BackDropProvider from './Store/Context/BackDrop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <BackDropProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BackDropProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
)
