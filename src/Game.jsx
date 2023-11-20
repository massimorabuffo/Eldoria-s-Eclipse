//Creazione di un array di oggetti e ogni oggetto dovrebbe definire un paragrafo con testo e proprietà
//hidden(boolean). Per renderizzare i paragrafi faccio un map di questi array, ogni paragrafo avrà un id,
// al click del paragrafo passa l id del paragrafo e modifica la proprietà hidden di quel elemento.
//Aggiungi un index +1 per agire sul successivo.

import { useState } from "react"
import { useParams } from "react-router-dom"
import { Character } from "./Character"


export function Game() {
    const { hero } = useParams()
    const [number, setNumber] = useState(0);
    const [data, setData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [choose, setChoose] = useState('')
    const [hidden, setHidden] = useState(true);

    const paragrafhArr = [
        {
            text: '1 Story',
            textP: "Nel bel mezzo di questa imminente catastrofe, si ergono figure di speranza e coraggio. Nella luce del sole brillante, emerge un paladino, un guerriero il cui destino è intrecciato indissolubilmente a quello del regno. Vestito in un'armatura scintillante di placche, i cui simboli sacri risplendono di un bagliore divino, il paladino avanza con occhi intensi e determinati. La sua spada sacra, pronta a essere sguainata contro le tenebre, è la lama che taglia l'oscurità, un baluardo contro la minaccia del drago d'ombra.",
            textM: "Le mani della maga sono agili e delicate, ma vibrano con un potere arcano immenso amplificato dal cristallo nel suo bastone. Ogni gesto che compie è studiato e preciso, mentre intona antiche formule magiche con una voce che risuona come una melodia incantata.",
            id: 0,
        },
        {
            text: '2 Story',
            textP: "Ti viene assegnata una missione dal Re: ''c'è un villaggio poco lontano da qui, pochi mesi fa alcuni mostri hanno iniziato ad avvicinarsi sempre di più e da poco è finito in fiamme. Vorrei che andassi a controllare l'area e scoprissi la causa di questi strani avvicinamenti.'' ",
            textM: 'Background Mago',
            id: 1,
        },
        {
            text: '3 Story',
            textP: "Prendi il tuo equipaggiamento, la tua spada sacra, un piccolo rifornimento e all'alba ti dirigi verso il villaggio. La capitale è grande ma proprio per questo c'è un molta gente che va e viene, anche in carrozza, e infatti eccone una proprio vicino al palazzo reale, che fortuna. ",
            textM: 'Inizio storia Mago',
            id: 2,
        },
        {
            text: '4 Story',
            textP: "La carrozza è trainata da due cavalli grigiastri, uno di loro ha qualche graffio ai lati della groppa, saranno stati attaccati da qualche mostro prima di arrivare in città. A capo della carrozza c'è un uomo sulla mezz'età con lo sguardo perso nel vuoto.",
            textM: 'Inizio storia Mago',
            id: 3,
        },
    ];

    const chooseArray = [
        {
            textA: '"HEY LEI, HO BISOGNO DI UN PASSAGGIO" la tua voce rimbomba per le strade della citta.',
            textB: '"Salve, sono diretto a sud, devo controllare uno dei villaggi vicini. Per caso può accompagnarmi?"',
        },
    ]



    // FUNZIONI FUNZIONI FUNZIONI FUNZIONI
    const handleContinue = () => {

        if (number < 4) {
            setData([...data, paragrafhArr[number]]);
            setNumber(number + 1);
        } else if (number >= paragrafhArr.length) {
            setHidden((item) => !item)
        }
        else { console.error('error') }
    };

    const chooseA = () => {
        setChoose('A')
        setHidden((item)=>!item)
        console.log('A was clicked')
    }
    const chooseB = () => {
        setChoose('B')
        console.log('B was clicked')
    }

    return (
        <>
            <div className="wrapper-game">
                <div className="container-game">
                    <div className="container-text-game">
                        <h2 className="text-game">Nel regno di Eldoria persiste un antico culto dedicato a Tiamath, all'interno della cui
                            cripta è tenuto custodito un drago d'ombra. La profezia narra che i sigilli della cripta
                            si sarebbero infranti il quattordicesimo giorno di Alturiac. Con l'avvicinarsi di
                            un'eclissi lunare, il drago si sarebbe risvegliato, portando con sé un'imminente apocalisse.
                            Dall'istante del suo risveglio all'alba successiva, il sole non avrebbe più risplenduto in
                            tutto il suo fulgore, ma avrebbe lasciato spazio a un'eterna eclissi solare.
                        </h2>

                        {data.map((el) => (
                            <h4 className="text-game" key={el.id}>{hero === 'paladin' ? el.textP : el.textM}</h4>
                        ))}


                    </div>
                    {/* BOTTONI */}

                    {/* {hidden && <button className='button-continue' onClick={() => handleContinue()}>Continua</button>} */}

                    {!hidden && hero === 'paladin' && (<div className="container-continue-button">
                        <button className='button-continue' onClick={() => chooseA()}>Gli urli contro.</button>
                        <button className='button-continue' onClick={() => chooseB()}>Ti avvicini gentilmente e gli chiedi se può accompagnarti.</button>
                        
                    </div>)}
                    {chooseArray.map((el) => (
                            <h4 >{choose === 'A' ? el.textA : choose === 'B' && el.textB}</h4>
                    ))}
                    
                    {hidden && <button className='button-continue' onClick={() => handleContinue()}>Continua</button>}
                </div>
            </div>
        </>
    );
}