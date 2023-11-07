import { useRef, useState } from "react"
import { Personaggio } from "./Personaggio"
import { Continua1 } from "./Continua1"
import { Continua2 } from "./Continua2"

export function Avventura() {
    const [eroe, setEroe] = useState('')
    const [hidden, setHidden] = useState()
    const [hidden2, setHidden2] = useState()
    const [showStory, setShowStory] = useState()
    const [showStory2, setShowStory2] = useState()
    const [isDisabled, setIsDisabled] = useState(false)

    function continua() {
        setShowStory2((item) => !item)
    }
    function firstContinua() {
        setShowStory((item) => !item)
        setIsDisabled(true)
        setHidden2((item) => !item)
    }
    function handleButton() {
        setHidden((item) => !item)
    }
    function choosedHero(id) {
        console.log('click')
        if (id && id === 'paladin') {
            setEroe('paladin')
        } else {
            setEroe('mage')
        }
        setHidden((item) => !item)
    }
    return (
        <div className="wrapper-adventure">
            <div className="container-adventure">
                <div className="container-text-adventure">
                    <div className="text-adventure">
                        <p>Nel regno di Eldoria vi è un antico culto di Tiamath. All'interno della cripta del culto è custodito un drago d'ombra.
                            La profezia narra che i sigilli della cripta si sarebbero spezzati durante il 14esimo giorno di Alturiac.
                            Durante l'eclissi lunare il drago si sarebbe risvegliato portando con sè l'apocalisse.
                            Dal suo risveglio all'alba non ci sarebbe piu stato il sole per intero ma una perenne eclissi solare
                        </p>
                    </div>
                    <div className="text-adventure">
                        <p>
                            Due avventurieri coraggiosi si metteranno a rischio per salvare l'umanità.
                        </p>
                        <h2>Scegli il tuo eroe:</h2>
                    </div>
                </div>
                <div className="container-card-adventure">
                    <div className={!hidden ? 'card-adventure' : 'disactive'} id='paladin' onClick={() => choosedHero('paladin')}>
                        <div className="character-img">
                            <img src="src/assets/paladinoImg.jpg" />
                        </div>
                        <div className="text-card">
                            <div className="characters-name">
                                <h2>Eldrin</h2>
                            </div>
                            <div className="characters-nickname">
                                <h3>Il Cavaliere Luminoso</h3>
                            </div>
                            <div className="characters-description">
                                <h3>Umano - Paladino</h3>
                                <h3>Forza(+3) Volontà(+2) Costituzione(+2)</h3>
                            </div>
                        </div>
                    </div>
                    <div className={!hidden ? 'card-adventure' : 'disactive'} id="mage" onClick={() => choosedHero('mage')}>
                        <div className="character-img">
                            <img src="/Elf-Female-Mage.jpg" />
                        </div>
                        <div className="text-card">
                            <div className="characters-name">
                                <h2>Lyra</h2>
                            </div>
                            <div className="characters-nickname">
                                <h3>La Strega delle fiamme</h3>
                            </div>
                            <div className="characters-description">
                                <h3>Elfo - Mago</h3>
                                <h3>Intelligenza(+3) Destrezza(+2) </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-text-adventure">
                    <div className={hidden ? 'container-hero' : 'disactive'}>
                        {eroe && <Personaggio eroe={eroe} />}
                    </div>
                    <div className='back-button'>
                        <button
                            disabled={isDisabled}
                            className={hidden ? 'active' : 'disactive'}
                            onClick={handleButton}>Preferisco Cambiare...</button>
                    </div>
                    <div className={hidden ? 'container-continue-button' : 'disactive'}>
                        <button className='continue-button' onClick={firstContinua}>Continua</button>
                        <div className={showStory ? "text-1" : 'disactive'}>
                            {eroe && <Continua1 eroe={eroe} />}
                        </div>
                    </div>
                    <div className={hidden2 ? 'container-continue-button' : 'disactive'}>
                        <button className='continue-button' onClick={continua}>Continua</button>
                        <div className={showStory2 ? "text-1" : 'disactive'}>
                            {eroe && <Continua2 eroe={eroe} />}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}