export function Rules() {
  return (
    <div className="rules">
      <div className="img-rules"></div>

      <div className="color-rules">
        <h1>Regole del gioco</h1>
        <h2>Come giocare a questo straordinario gioco</h2>
      </div>

      <div className="container-rules-generale">
        <h2>Introduzione al gioco</h2>
        <div className="flex-rules">
          <div className="text-rules">
            <p>
              In Dungeons & Dragons, i giocatori formano un gruppo di
              avventurieri che esplora mondi fantastici e affronta epiche
              missioni aumentando il proprio livello di esperienza. In D&D non
              si vince né si perde... perlomeno non nel modo tradizionale.
              Dungeons & Dragons è un gioco incentrato sulla narrazione, i dadi
              ti danno solo una mano. Tutto dipende da te: il tuo aspetto, le
              tue azioni e come procede la storia. Nella pagina principale
              inizierai la tua avventura, dovrai scegliere uno tra i personaggi
              disponibili e ricordati: Non hai scelto un personaggio, tu SEI
              quel personaggio.
            </p>
          </div>
          <div className="container-img">
            <img
              src="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/07/Dungeons-and-Dragons-backgrounds.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="flex-rules">
          <div className="container-dragon">
            <img src="https://wallpapercave.com/dwp1x/wp7069126.jpg" alt="" />
          </div>
          <div className="text-rules">
            <h2>Si entra nell'avventura</h2>
            <p>
              I personaggi hanno sei attributi fondamentali: Forza, Destrezza,
              Costituzione, Intelligenza, Saggezza e Carisma. Questi attributi
              influenzano il successo delle azioni intraprese dai personaggi.
              D&D fa largo uso di dadi, in particolare il d20 (dado a 20 facce).
              I dadi vengono lanciati per determinare il successo in azioni come
              gli attacchi in combattimento, i tiri salvezza e altre prove. Ogni
              personaggio ha un numero di punti ferita che rappresenta la sua
              salute. Se i punti ferita raggiungono zero, il personaggio è
              ferito o sconfitto. Le azioni sono risolte con i tiri di dado. In
              combattimento, i personaggi lanciano dadi per determinare se
              colpiscono e quanto danno infliggono. I personaggi guadagnano
              esperienza completando missioni e sconfiggendo nemici. Aumentano
              di livello, acquisiscono nuove abilità e potenziando le
              caratteristiche. D&D incoraggia la narrazione e il gioco di ruolo,
              spingendo i giocatori a interpretare i loro personaggi e prendere
              decisioni basate sulla personalità dei personaggi. I giocatori
              esplorano mondi fantastici, affrontano mostri, risolvono enigmi e
              completano missioni guidate dal DM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
