import { Route, Routes } from "react-router-dom"
import Login from "./Login"
import Game from "./Game"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/game" element={<Game />} />
    </Routes>
    </>
  )
}

export default App
