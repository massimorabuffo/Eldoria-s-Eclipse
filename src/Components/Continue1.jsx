export function Continue1({ hero , textP, textM}) {
    
    return (
        <div>
            {hero === 'paladin' && <h3>{textP}</h3>}
            {hero === 'mage' && <h3>{textM}</h3>}
        </div>
    )
}

//Nel regno di Eldoria persiste un antico culto dedicato a Tiamath, all'interno della cui
// cripta è tenuto custodito un drago d'ombra. La profezia narra che i sigilli della cripta
// si sarebbero infranti il quattordicesimo giorno di Alturiac. Con l'avvicinarsi di
// un'eclissi lunare, il drago si sarebbe risvegliato, portando con sé un'imminente apocalisse.
// Dall'istante del suo risveglio all'alba successiva, il sole non avrebbe più risplenduto in
// tutto il suo fulgore, ma avrebbe lasciato spazio a un'eterna eclissi solare.