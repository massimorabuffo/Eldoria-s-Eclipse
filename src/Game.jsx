import { useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "./Character"
import { Continue1 } from "./Continue1"
import { Continue2 } from "./Continue2"
import { Adventure } from "./Adventure"

export function Game() {
    const { hero } = useParams()
    const [hidden, setHidden] = useState()
    const paragrafiArr = [{
        text: '1',
        hidden: true,
    },
    {
        text: '2',
        hidden: true,
    },
    {
        text: '3',
        hidden: true,
    }]
    // const [isDisabled, setIsDisabled] = useState(false)


    // function funcContinue() {
    //     setShowStory2((item) => !item)
    // }
    function handleContinue(index) {
        setHidden((item) => !item)
        paragrafiArr[index].hidden = false
        setparagraf(paragrafiArr)
        // setIsDisabled(true)
    }
    //Creazione di un array di oggetti e ogni oggetto dovrebbe definire un paragrafo con testo e proprietà 
    //hidden(boolean). Per renderizzara i paragrafi faccio un map di questi array, ogni paragrafo avrà un id,
    // al click del paragrafo passa l id del paragrafo e modifica la proprietà hidden di quel elemento.
    //Aggiungi un index +1 per agire sul successivo

    return (
        <div>
            <div className="wrapper-adventure">
                <div className="container-adventure">
                    <div className="container-text-adventure">
                        <div className="text-adventure">
                            <p>
                                Nel regno di Eldoria persiste un antico culto dedicato a Tiamath, all'interno della cui
                                cripta è tenuto custodito un drago d'ombra. La profezia narra che i sigilli della cripta
                                si sarebbero infranti il quattordicesimo giorno di Alturiac. Con l'avvicinarsi di
                                un'eclissi lunare, il drago si sarebbe risvegliato, portando con sé un'imminente apocalisse.
                                Dall'istante del suo risveglio all'alba successiva, il sole non avrebbe più risplenduto in
                                tutto il suo fulgore, ma avrebbe lasciato spazio a un'eterna eclissi solare.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={hero === 'paladin' ? "container-paladin" : 'container-mage'}>
                    <Character hero={hero} />
                    <button className='continue-button' onClick={handleContinue}> Continua </button>
                    <div className={hidden ? 'text-adventure' : 'disactive'}>
                        <Continue1 hero={hero}
                            textP="Storia Paladino: Adottato da piccolo da una famiglia di nobili di un ordine 
                            cavalleresco, vieni cresciuto tra ricchezze, salute e potere. 
                            Ti viene insegnata l'arte della spada con l'obbiettivo di proteggere i più deboli e di esorcizzare il male.  
                            Al tuo 16esimo anno di età saresti entrato a far parte ufficialmente dell'ordine cavalleresco ma la notte prima misteriosi membri del culto
                            assalirono la dimora familiare, bruciando e uccidendo chiunque trovassero. 
                            Tua madre si sacrificò per riuscire a farti scappare sfruttando la foresta vicino la dimora.
                            Riuscisti ad arrivare a stento al primo villaggio vicino dove vivesti nascosto fino al calmarsi della situazione."
                            textM='Vabbè il mago lo faccio dopo.' />
                    </div>
                    <button className={hidden ? 'continue-button' : "disactive"} onClick={handleContinue}> Continua </button>
                    <div className={hidden ? 'text-adventure' : 'disactive'}>
                        <Continue1 hero={hero}
                            textP="Divenuto adulto e ormai trasferito nella capitale di Eldoria continui a portare 
                            avanti gli ideali insegnati dei tuoi genitori: 
                            distruggere il male e difendere i deboli, ma che cos'è questo male? Un ricordo rimasto nella tua mente per tutti questi anni: 
                            un uomo con una veste e il simbolo di un cerchio formato da un drago, appartiene sicuramente al culto che ha sterminato la tua 
                            famiglia."
                            textM='Vabbè il mago lo faccio dopo.' />
                    </div>
                    {/* paragrafiArr.map((el, index)=> (
                        <p key={index}>{el.text}</p>
                        <button onClick={()=>handleContinue(index)}> </button>
                    )) */}
                </div>
            </div>
        </div>
    )
}