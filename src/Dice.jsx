import { useState } from "react";

function Dice() {
  const [animating, setAnimating] = useState(false);
  const [diceNumber, setDiceNumber] = useState(null);

  const handleGenerateNumber = () => {
    if (!animating) {
      setAnimating(true);

      const randomNumber = Math.floor(Math.random() * 20) + 1;

      setTimeout(() => {
        setDiceNumber(randomNumber);
        setAnimating(false);
      }, 1000);
    }
  };

  return (
    <div className={`dice ${animating ? 'animating' : ''}`} id="animated-dice" onClick={handleGenerateNumber}>
      <span id="dice-number">{diceNumber}</span>
    </div>
  );
}

export default Dice