import { Route, Routes } from "react-router-dom"
import { Navbar } from "./navbar"
import { Home } from "./Home"
import { Rules } from "./Rules"
import { Testo } from "./TestoDiProva"
import { Adventure } from "./Adventure"
import { Game } from "./Game"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/game/:hero" element={<Game />} />
          <Route path="rules" element={<Rules />} />

      </Routes>
    </>
  )
}

export default App
