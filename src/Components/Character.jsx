export function Character({hero}){

    return(
        <div className="container-hero">
            {hero === 'paladin' ? <h2>Hai scelto il Paladino</h2> : <h2>Hai scelto il Mago</h2>}
            {hero === 'paladin' && <h3>Nella luce del sole brillante, un paladino emerge, 
                la figura di un guerriero vestito in una sontuosa armatura di placche. 
                I suoi occhi, intensi e determinati, riflettono la purezza del suo scopo. 
                La sua spada sacra, adornata con simboli sacri, risplende con una luce divina, 
                pronta a essere sguainata contro il male che minaccia il mondo.</h3>
            }
            {hero === 'mage' && <h3>Le mani della maga sono agili e delicate, ma vibrano 
                con un potere arcano immenso amplificato dal cristallo nel suo bastone. 
                Ogni gesto che compie è studiato e preciso, mentre intona antiche formule 
                magiche con una voce che risuona come una melodia incantata.</h3>
            }
            
        </div>
    )
}

// Limite = 5, 10 , 15

// Schivo -> lancio di dadi per destrezza -> +numero di bonus/malus = risultato finale
// Limite = 5, 10 , 15