export function Continue1({ hero , textP, textM}) {
    
    return (
        <div>
            {hero === 'paladin' && <h3>{textP}</h3>}
            {hero === 'mage' && <h3>{textM}</h3>}
        </div>
    )
}