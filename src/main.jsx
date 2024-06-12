import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ReactLenis } from '@studio-freight/react-lenis'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ReactLenis root={true} />
    </BrowserRouter>
  </React.StrictMode>,
)
