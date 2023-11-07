export function Continua1({ eroe }) {
    
    return (
        <div>
            {eroe === 'paladin' && <h3>Storia Paladino: Adottato da piccolo da una famiglia di nobili di un ordine cavalleresco vieni cresciuto tra ricchezze, 
                salute e potere. 
                Ti viene insegnata l'arte della spada con l'obbiettivo di proteggere i più deboli e di esorcizzare il male.  
                Al tuo 16esimo anno di età saresti entrato a far parte ufficialmente dell'ordine cavalleresco ma la notte prima misteriosi membri del culto
                assalirono la dimora familiare, bruciando e uccidendo chiunque trovassero. 
                Tua madre si sacrificò per riuscire a farti scappare sfruttando la foresta vicino la dimora.
                Riuscisti ad arrivare a stento al primo villaggio vicino dove vivesti nascosto fino al calmarsi della situazione.</h3>}
            {eroe === 'mage' && <h3>Storia Maga</h3>}
        </div>
    )
}