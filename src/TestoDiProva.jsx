import { useState } from "react"
import { Componente } from "./Componente"

export function Testo(){
    const [choice, setChoice] = useState('')
    function handleChoice(event){
        setChoice(event.target.value)
        console.log(choice)
    }
    return(
        <div>
            <button onClick={handleChoice} value='Vai a destra'>Vai a destra!</button>
            <button onClick={handleChoice} value='Vai a sinistra'>Vai a sinistra!</button>
            {choice && <Componente scelta={choice}/>}
        </div>
    )
}