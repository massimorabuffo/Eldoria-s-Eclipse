import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./Style/About.css"
import './Style/login.css'
import 'bootstrap/dist/css/bootstrap.css';
import "./Style/rules.css"
import "./Style/footer.css"
import AppContext from './userContext.jsx'
import "./Style/Navbar.css"
import "./Style/Home.css"
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <BrowserRouter>
      <AppContext>
        <App />
      </AppContext>
    </BrowserRouter>
  </React.StrictMode>
)
