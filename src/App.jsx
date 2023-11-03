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
      <Avventura/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        {/* <Route path="/home/adventure" element={<Avventura/>}/> */}
        
        <Route path="rules" element={<Rules/>}/>
      </Routes>
      
      {/* <Testo/> */}
    </>
  )
}

export default App
