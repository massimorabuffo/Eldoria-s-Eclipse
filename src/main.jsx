import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./Style/About.css"
import './login.css'
import 'bootstrap/dist/css/bootstrap.css';


import "./Style/rules.css"
import "./Style/footer.css"

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
