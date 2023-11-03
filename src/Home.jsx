import { useState } from "react"
import { Avventura } from "./Avventura"
import { Outlet, useNavigate } from "react-router-dom"

export function Home() {
    const [hidden, setHidden] = useState()

    const navigate = useNavigate()

    function startAdventure() {
        setHidden((item) => !item)
        navigate('/home/adventure')
    }
    return (
        <div className="background-home">
            <img src="src/assets\dragonforbg.jpg" alt="drago" />
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


    )
}

//Ogni turno è un componente, esso contiene le due opzioni possibili
//e a seconda del bottone cliccato ritorna la porzione di codice assegnata a quel bottone.