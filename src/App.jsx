import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Routes, Route } from 'react-router-dom';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import Navbar from "./Components/NavBar.jsx";
import { GameTry } from "./Components/GameTry.jsx";

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
        <Route path="/gametry/:hero" element={<GameTry />} />
      </Routes>
    </>
  )
}

export default App;