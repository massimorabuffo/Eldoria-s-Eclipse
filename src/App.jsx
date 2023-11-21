
import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Game from "./Game"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Game } from "./Components/Game.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import About from './Components/About';
import Rules from './Components/Rules';
import { About } from "./Components/About";
import "./Style/App.css"
import "./Home.css"
import './style.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
       // <Route path="/:user/:id" element={<Game />} />
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/game/:hero" element={<Game />} />
      </Routes>
    </Router>
  )
}

export default App;