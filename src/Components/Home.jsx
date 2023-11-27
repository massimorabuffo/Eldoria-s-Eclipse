import { useContext, useState } from "react"
import "./Adventure"
import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./NavBar"
import { UserContext } from "../userContext"

export function Home() {
    const [hidden, setHidden] = useState()
    const user = useContext(UserContext);
    const navigate = useNavigate()

    function startAdventure() {
        setHidden((item) => !item)
        navigate('/adventure')
    }
    return (
        <>
            <Navbar />
            <div className="background-home">
                {/* <p>Welcome back, {user}</p> */}
                <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/11/Shadow-of-the-Dragon-Queen-Dragonlance.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="drago" />
                <div className="container-sword-svg">
                    <img src='src/assets\swords-svg.png'/>
                </div>
                <div className="container-start-button">
                    <button
                        className={!hidden ? 'active' && 'start-button' : 'disactive'}
                        onClick={startAdventure}>
                        <h1>Inizia la tua avventura!</h1>
                    </button>
                </div>
            </div>
        </>
    )
}

//Ogni turno è un componente, esso contiene le due opzioni possibili
//e a seconda del bottone cliccato ritorna la porzione di codice assegnata a quel bottone.