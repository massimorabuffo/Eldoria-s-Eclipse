import { useState } from "react"
import "./Adventure"
import { Outlet, useNavigate } from "react-router-dom"
import { useUserContext } from "../userContext"

export function Home() {
    const [hidden, setHidden] = useState()
    const navigate = useNavigate()
    const {user} = useUserContext();

    function startAdventure() {
        setHidden((item) => !item)
        navigate('/adventure')
    }
    return (
        <>
            <div className="background-home">
                <h1>Bentornato, {user.username}!</h1>
                <div className="container-sword-svg">
                    <img src='../src/assets\swords-svg.png'/>
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