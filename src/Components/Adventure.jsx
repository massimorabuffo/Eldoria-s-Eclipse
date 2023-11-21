import { useEffect, useState } from "react"
import { Character } from "./Character"
import { useNavigate } from "react-router-dom"

export function Adventure() {
    const [hero, setHero] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        if (hero) {
          navigate(`/game/${hero}`);
        }
      }, [hero, navigate]); 

    function choosedHero(id) {
        console.log('click')

        if (id && id === 'paladin') {
            setHero('paladin')
        } else {
            setHero('mage')
        }
        
    }
    return (
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
                    <div className="text-adventure">
                        <p>
                            Due avventurieri coraggiosi si metteranno a rischio per salvare l'umanità.
                        </p>
                        <h2>Scegli il tuo eroe:</h2>
                    </div>
                </div>
                <div className="container-card-adventure">
                    <div className='card-adventure' id='paladin' onClick={() => choosedHero('paladin')}>
                        <div className="character-img">
                            <img src="/paladinoImg.jpg" />
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
                    <div className='card-adventure' id="mage" onClick={() => choosedHero('mage')}>
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
            </div>

        </div>
    )
}

//Dividere la scelta del personaggio con la campagna.