import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Adventure } from "./Adventure"
import { Game } from "./Game"
import "./Home.css"

function App() {

  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="/game/:hero" element={<Game />} />

      </Routes>
    </>
  )
}

export default App
