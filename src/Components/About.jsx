import { useState } from "react";
import Navbar from "./NavBar";


export function About() {
  const [isOpen, setIsOpen] = useState(null);

  function handleToggle(i) {
    if (isOpen === i) {
      return setIsOpen(null);
    }
    setIsOpen(i);
  }

  const faq = [
    {
      question: "Cos'è D&D?",
      answer:
        `Dungeon & Dragons (D&D) è il gioco di ruolo migliore al mondo. D&D è un gioco narrativo collaborativo. 
        Insieme ai tuoi amici potrai imbarcarti in epiche avventure verso terre fantastiche. Tra i giocatori viene scelto quello
        che viene chiamato Dungeon Master (DM), che è colui che fa da arbitro e narratore del gioco.`
    },
    {
      question: "Cosa fa il DM?",
      answer: `Come già detto, il DM è il narratore e l'arbitro del gioco, si occupa di far avanzare l'avventura per i giocatori,
      che ne affrontano i pericoli e decidono cosa esplorare. Il DM descrive i luoghi e le creature che gli avventurieri dovranno
      affrontare, mentre i giocatori decidono cosa fanno i loro personaggi. Dopodiché, usando la sua immaginazione, il DM determina il
      risultato delle loro azioni e narra ciò che vivono.`,
    },
    {
      question: "Come si gioca?",
      answer: `In D&D ogni giocatore crea il suo personaggio eroico che lo rappresenti nel gioco: potrebbe essere un abile guerriero,
      un devoto chierico, un mago incantatore o qualsiasi altra cosa. Insieme, DM e giocatori, creano una storia emozionante in cui
      i loro avventurieri affrontano i vari pericoli.`,
    },
    {
      question: "Quali sono le regole del gioco?",
      answer: `Se vuoi sapere di più sulle regole del gioco clicca sul tasto Rules presente sulla barra di navigazione.`,
    },
    {
      question: "A cosa servono i dadi?",
      answer: `Normalmente vengono usati per determinate azioni (es: il D6) ma nel nostro caso abbiamo deciso di 
      semplificarne l'uso riducendo il tutto ad un semplice dado a 20 facce (anche detto D20), dado caratteristico di D&D, per 
      facilitare la comprensione a chi è nuovo in questo mondo.`,
    },
  ];

  return (
    <div>
      <div className="nonloso">
        <img src="src\assets\images\0_RUSGLIjpQVY7kt4Y.jpg" alt="" />
      </div>

      <div className="wrapper-accordion">
      <h1>Informazioni sul gioco</h1>
        <div className="accordion">
          {faq.map((item, i) => (
            <div className="container">
              <div className="question" onClick={() => handleToggle(i)}>
                <h2>{item.question}</h2>
                <span
                  style={{
                    transition: "all 0.3s",
                    transform: isOpen === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="0.625em"
                    viewBox="0 0 512 512"
                    id="arrow-down"
                  >
                    <path
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 
                      45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 
                      169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                </span>
              </div>
              <div className={isOpen === i ? "answer show" : "answer"}>
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}