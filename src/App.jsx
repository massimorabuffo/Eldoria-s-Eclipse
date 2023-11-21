
import { Home } from "./Home"
import { Adventure } from "./Adventure"
import { Game } from "./Game"
import "./Home.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Home from './Components/Home.jsx';
import About from './Components/About';
import Rules from './Components/Rules'
import "./Style/App.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/game/:hero" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;