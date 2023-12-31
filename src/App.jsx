import Login from "./Login"
import { Home } from "./Components/Home.jsx";
import { Adventure } from "./Components/Adventure.jsx";
import { Routes, Route, useLocation } from 'react-router-dom';
import { Rules } from "./Rules"
import { About } from "./Components/About";
import Navbar from "./Components/NavBar.jsx";
import { GameTry } from "./Components/GameTry.jsx";
import { useState } from "react";
import Sidebar from "./Components/Sidebar.jsx";

function App() {

  const location = useLocation();
  
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const funzioneDiChiusura = () => {
    setSidebarVisible(false)
  }

  function funzioneAperturaSideBar (){
    setSidebarVisible(true)
  }


  const handleLogout = async () => {
    try {
      // Effettua una richiesta al backend per eseguire il logout
      const response = await fetch('http://localhost:3000/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`, // Includi il token nell'intestazione
        },
      });
  
      if (response.ok) {
        // Logout riuscito
        console.log('Logout eseguito con successo!');
        // Rimuovi il token dal localStorage
        localStorage.removeItem('token');
      } else {
        // Logout fallito
        console.log('Logout fallito');
        // Puoi gestire altri casi se necessario
      }
    } catch (error) {
      console.error('Errore durante il logout:', error);
    }
  };


  return (
    <>
     {sidebarVisible && <Sidebar onClose={funzioneDiChiusura} handleLogout={handleLogout}/>}
     {location && location.pathname !== '/' && <Navbar  sidebarVisible={sidebarVisible} onOpenSideBar={funzioneAperturaSideBar} handleLogout={handleLogout}/>}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/:user" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rules" element={<Rules/>} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/gametry/:hero" element={<GameTry />} />
      </Routes>
      {/* <FormProva/> */}
    </>
  )
}

export default App;