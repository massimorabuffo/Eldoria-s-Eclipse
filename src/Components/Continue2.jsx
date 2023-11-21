export function Continue2({ hero }) {

    return (
        <div>
            {hero === 'paladin' && 
            <h3>Divenuto adulto e ormai trasferito nella capitale di Eldoria continui a portare avanti gli ideali insegnati dei tuoi genitori: 
                distruggere il male e difendere i deboli, ma che cos'è questo male? Un ricordo rimasto nella tua mente per tutti questi anni: 
                un uomo con una veste e il simbolo di un cerchio formato da un drago, appartiene sicuramente al culto che ha sterminato la tua 
                famiglia.</h3>}
            {hero === 'mage' && <h3>Storia Maga</h3>}
        </div>
    )
}