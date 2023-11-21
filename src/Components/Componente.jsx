export function Componente({scelta}){

    return (
        <div>
            {scelta === 'Vai a destra' ? <h1>sei andato a destra</h1> : <h1>sei andato a sinistra</h1>}
        </div>
    )
}