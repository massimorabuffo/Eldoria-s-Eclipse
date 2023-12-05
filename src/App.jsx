import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Game } from "./Components/Game.jsx";
import { Routes, Route } from 'react-router-dom';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import Navbar from "./Components/NavBar.jsx";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/:user/:id" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/game/:hero" element={<Game />} />
      </Routes>
    </>
  )
}

export default App;