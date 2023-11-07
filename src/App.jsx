import { Route, Routes } from "react-router-dom"
import { Navbar } from "./navbar"
import { Home } from "./Home"
import { Rules } from "./Rules"
import { Testo } from "./TestoDiProva"
import { Avventura } from "./Avventura"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/adventure" element={<Avventura/>}/>
        <Route path="rules" element={<Rules/>}/>
      </Routes>
    </>
  )
}

export default App
