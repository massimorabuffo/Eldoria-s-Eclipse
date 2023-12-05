import { useNavigate } from "react-router-dom"


export const Paragraph = ({
    step,
    hideButton,
    handleUserChoice,
    handleDiceRoll,
    gameOver,  //mi riporto la variabile per verificare se l'array e finito
    handleRestart  //per attivare il bottone ricomincia nuova partita
}) => {
  const navigate = useNavigate();

  return (
    <div className="container-text-game">
      <div className="text-game">{step.text}</div>
      {!hideButton && 
          <div>
            {step.hasCrossroads // è true quando c'è una scelta da fare
            ? <div className="container-continue-button">
                {step.crossRoad?.map((choice, index) => (
                    <button className='button-continue' key={index} onClick={() =>handleUserChoice(choice.goTo)}>{choice.text}</button>
                ))}
              </div>
            : step.hasChallenge
               // è true quando c'è il lancio del dado
              ? <div className="container-continue-button"><button className='button-continue' onClick={() => handleDiceRoll(step)}>Lancia il dado</button></div>
              : <div className="container-continue-button">{!gameOver && <button className='button-continue' onClick={() => handleUserChoice(step.goTo)}>Continua</button>}</div>
          }
          {gameOver && <div className="container-continue-button">
            <button className="button-continue" onClick={handleRestart}>Ricomincia nuova partita!!</button>
            <button className="button-continue" onClick={()=>{
              navigate(`/adventure`);
            }}>
              Cambia personaggio
            </button>
            </div>}
        </div>
      }
    </div>
  )
}