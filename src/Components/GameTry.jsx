import { Paragraph } from "./Paragraph";
import { useState } from 'react';
import { useParams } from "react-router-dom"

const storyArrayPaladin = [
    {
        id: 0,
        text: 'Sei morto!',
        hasCrossroads: false,
        hasChallenge: false,
    },
    {
        id: 1,
        text: "Nel bel mezzo di questa imminente catastrofe, si ergono figure di speranza e coraggio. Nella luce del sole brillante, emerge un paladino, un guerriero il cui destino è intrecciato indissolubilmente a quello del regno. Vestito in un'armatura scintillante di placche, i cui simboli sacri risplendono di un bagliore divino, il paladino avanza con occhi intensi e determinati. La sua spada sacra, pronta a essere sguainata contro le tenebre, è la lama che taglia l'oscurità, un baluardo contro la minaccia del drago d'ombra.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 2
    },
    {
        id: 2,
        text: "Ti viene assegnata una missione dal Re: ''c'è un villaggio poco lontano da qui, pochi mesi fa alcuni mostri hanno iniziato ad avvicinarsi sempre di più e da poco è finito in fiamme. Vorrei che andassi a controllare l'area e scoprissi la causa di questi strani avvicinamenti.'' ",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 3,
    },
    {
        id: 3,
        text: "Prendi il tuo equipaggiamento, la tua spada sacra, un piccolo rifornimento e all'alba ti dirigi verso il villaggio. La capitale è grande ma proprio per questo c'è un molta gente che va e viene, anche in carrozza, e infatti eccone una proprio vicino al palazzo reale, che fortuna. ",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 4,
    },
    {
        id: 4,
        text: "La carrozza è trainata da due cavalli grigiastri, uno di loro ha qualche graffio ai lati della groppa, saranno stati attaccati da qualche mostro prima di arrivare in città. A capo della carrozza c'è un uomo sulla mezz'età con lo sguardo perso nel vuoto.",
        hasCrossroads: true,
        hasChallenge: false,
        crossRoad: [
            {
                text: 'Gli urli contro di darti un passaggio', 
                goTo: 5 //Scelta A(1)
            },
            {
                text: 'Ti avvicini e gentilmente gli chiedi se può accompagnarti', 
                goTo: 8 //Scelta B(1)
            },
        ]
    },
    
    
    //Scelta A(1)
    {
        id: 5,
        text: <div>
            "HEY LEI, HO BISOGNO DI UN PASSAGGIO la tua voce rimbomba per le strade della citta." <br/>
            Il vecchio sobbalza e sgrana gli occhi rivolgendoti uno sguardo disprezzante: <br/>
            "Potresti anche evitare di urlare al primo che capita sai? Diciamo che non è il massimo dell'educazione 
            e qui ho rischiato un'infarto, ma va bene, dove saresti diretto? Ad una competizione di ruggiti tra bestie?" <br/>
            "Non c'è bisogno di essere scontrosi... Comunque sto andando a sud, devo visitare uno dei villaggi vicini." <br/>
            Il vecchio ti lancia un occhiataccia <br/>
            "Puoi salire, fortuna vuole che io debba passare di li, purtroppo per me."
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 6
    },
    {
        id: 6,
        text: <div>
            Uno schiocco di frusta e la carrozza si mette in viaggio. Usciti dalla capitale l'aria ha iniziato a farsi sempre più 
            pesante man mano che ci si allontanava.
            Al calar della notte del secondo giorno intravedi il villaggio e ancor prima l'intera area bruciata. 
            Sembrava che fosse passato un drago con la luna storta ma è abbastanza improbabile data la limitatezza dei danni.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 7
    },
    {
        id: 7,
        text: <div>
            "Sono arrivato. Non morire, mi piacerebbe avere un'altro passaggio" dici balzando giù dalla carrozza atterrando sulle tracce di cenere.<br/>
            "Sisi, non ho ancora intenzione di farmi ammazzare. Arrivederci." conclude il vecchio prima di allontanarsi e sparire all'orizzonte.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 10
    },
    //Scelta B(1)
    {
        id: 8,
        text: <div>
            "Salve, sono diretto a sud, devo controllare uno dei villaggi vicini. Per caso può accompagnarmi?"<br />
            Il vecchio squote leggermente la testa come per riprendersi e si gira lentamente verso di te:<br />
            "Ehm si, certo. Tanto sono diretto anche io da quelle parti, sali pure...<br />
            La tua presenza può solo che essere confortante... credo." dice il vecchio a bassa voce.<br />
            Uno schiocco di frusta e la carrozza si mette in viaggio.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 9
    },
    {
        id: 9,
        text: <div>
            Usciti dalla capitale l'aria ha iniziato a farsi sempre più pesante man mano che ci si allontanava.
            Al calar della notte del secondo giorno intravedi il villaggio e ancor prima l'intera area bruciata.
            Sembrava che fosse passato un drago con la luna storta ma è abbastanza improbabile data la limitatezza dei danni.<br />
            "Scendo qui, ti ringrazio. Fa attenzione più avanti, ultimamente i mostri sembrano più aggressivi." dici scendendo mentre la carrozza sembra cigolare per lo sforzo.<br />
            "Fai attenzione anche tu." dice il vecchio prima di allontanarsi e sparire all'orizzonte.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 10
    },
    {
        id: 10,
        text: <div>
            Davanti ai tuoi occhi rimangono solo cenere, corpi bruciati, macerie e qualche mezza casa sopravvissuta per miracolo anche se totalmente nere e ancora fumanti.
            Un edificio spicca leggermente tra tutti, sembra aver resistito meglio degli altri... quasi come se le fiamme non fossero riuscite a superare la porta.<br/>
            "Certo non è opera di qualche goblin... chissà che razza di mostro può aver fatto tutto questo."
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 11
    },
    {
        id: 11,
        text: "Potrei cercare degli indizi o dirigermi direttamente all'unico edificio rimasto integro",
        hasCrossroads: true,
        hasChallenge: false,
        crossRoad: [
            {
                text: 'Perlustri il villaggio cercando indizi.',
                goTo: 12
            },
            {
                text: "Ti dirigi direttamente all'edificio integro.",
                goTo: 17
            },
        ]
    },
    //Scelta A(2)

    {
        id: 12,
        text: <div>
            "Potrei trovare qualcosa che mi faccia capire meglio cosa è successo qui. Meglio perlustrare anche quelle macerie."<br/>
            Devi fare un tiro su Indagare(Intelligenza), essendo un paladino hai un debuff di due punti sul risultato finale e devi ottenere almeno un 10 per avere successo.
        </div>,
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 13,
        challenge: {
            limitScore: 10,
            goToOver: 16, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 13 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    //Punteggio > 10
    {
        id: 13,
        text: 'Hai avuto successo!',
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 14
    },
    {
        id: 14,
        text: <div>
            Analizzi l'area circostante con estrema attenzione, gli odori di fumo e sangue ti permeano il naso ma la tua vista non ne ha ancora 
            risentito. Noti una fiochissima luce violastra tra le varie macerie di una casa. Liberato il passaggio tra te e quella piccola luce 
            vedi davanti a te un piccolo vaso che sembra contenere proprio quella luce. Spacchi il vaso con un calcio e ti ritrovi davanti a te 
            ciò che sembra una scaglia. Il colore è simile all'ossidiana ma la consistenza è tutt'altro fuorchè dura, sembra come se si stesse 
            ancora formando.<br/>
            E' una scaglia del drago ombra...
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 15
    },
    {
        id: 15,
        text: <div>
            "Queste scaglie non si staccano direttamente dal corpo del drago come si potrebbe pensare ma crescono quasi come muffa nei posti 
            collegati ai draghi d'ombra. La particolarità, oltre alla fioca luce viola, è che fanno diventare più aggressivi i mostri nelle vicinanze, 
            forse l'attacco è stato causato da questo." <br/>
            E mentre vieni assorbito dalle varie ipotesi ti dirigi verso l'unico punto non ancora controllato.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 18
    },
    //Punteggio < 10
    {
        id: 16,
        text: <div>
            Analizzi l'area circostante ma niente sembra dire qualcosa di più. Sono solo cumuli di macerie, vai avanti a passo svelto e ti 
            ritrovi davanti all'unico edificio rimasto in piedi.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 18
    },

    //Scelta B(2)

    {
        id: 17,
        text: "Probabilmente non troveresti nulla cercando altrove, l'unica scelta sensata è entrare in quell'edificio.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 18
    },
    {
        id: 18,
        text: <div>
            Una volta arrivato all'edificio esso si presenta come una normale casa leggermente piu grossa, l'unica differenza era quell'enorme portone che presentava delle incisioni sulla maniglia.
            "E' ora di usare un po' di forza bruta" dici iniziando a caricare il grosso portone.<br/>
            Devi riuscire a fare un punteggio superiore a 6 per sfondarlo.
        </div>,
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 22,
        challenge: {
            limitScore: 6,
            goToOver: 19, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 22 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    //Esito < 6
    {
        id: 19,
        text: "Il portone è troppo duro, ti rompi un braccio e la tua forza viene dimezzata.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 20
    },
    {
        id: 20,
        text: "Toccando la maniglia le incisioni si illuminano spalancando il portone. Che sfiga, se solo l'avessi saputo prima",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 21
    },
    {
        id: 21,
        text: "Davanti a te si estende una strana sala d'aspetto. Emana una fioca luce viola. Ti dirigi verso la fonte della luce",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 23
    },

    //Esito > 6
    {
        id: 22,
        text: "Ce l'hai fatta. Adesso davanti a te si estende una strana sala d'aspetto. Emana una fioca luce viola. Ti dirigi verso la fonte della luce",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 23
    },


    {
        id: 23,
        text: "La fonte della luce è una sorta di sfera scheggiata lievemente sollevata da terra. Avvicinando la mano per capire meglio vieni assorbito dalle ombre.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 24
    },
    {
        id: 24,
        text: "Le ombre stanno cercando di divorarti, fai un tiro salvezza con punteggio superiore a 5 per sopravvivere.",
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 25,
        challenge: {
            limitScore: 5,
            goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 25 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    //Esito > 5
    {
        id: 25,
        text: <div>
            Le ombre ti hanno teletrasportato altrove. Sei circondato da enormi pareti rocciose, riesci a malapena a vedere il soffito da quanto è alto e tutta 
            l'area è circondata da scaglie di drago d'ombra che illuminano la zona. Guardandoti attorno noti vari corpi, presentano tutti delle bruciature e sono disposti a stella. <br/>
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 26
    },
    {
        id: 26,
        text: <div>
            Improvvisamente iniziano a formarsi delle linee di luce sul pavimento collegando i vari corpi tra loro, senti delle urla abbastanza forti da poterti distruggere i timpani e poi... <br/>
            Silenzio totale <br/>
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 27
    },
    {
        id: 27,
        text: <div>
            Il silenzio viene distrutto da un ruggito. Le pareti iniziano a tremare e le linee di luce di prima si sollevano e agglomerano fino a formare la figura di un drago enorme.
            Il corpo ha delle scaglie violacee luccicanti e dalle fauci sgorgano litri e litri di sangue. <br/>
            Il drago d'ombra si è risvegliato.
        </div>,
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 28
    },
    {
        id: 28,
        text: "Il drago fionda gli artigli verso la tua direzione, fai un tiro salvezza superiore a 7",
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 29,
        challenge: {
            limitScore: 7,
            goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 29 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    //Esito > 7
    {
        id: 29,
        text: "Balzi alla tua destra riuscendo a schivare per un soffio l'attacco. Gli artigli creano tre profonde spaccature nel terreno. E' il tuo turno.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 30
    },
    {
        id: 30,
        text: <div>
            Estrai la tua spada sacra e la infondi di magia. Con un scatto ti avvicini al ventre del drago e attacchi con tutte le tue forze. <br/>
            Fai un punteggio superiore a 5 per avere successo.
        </div>,
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 31,
        challenge: {
            limitScore: 5,
            goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 31 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    {
        id: 31,
        text: "Con un colpo di spada riesci a creare uno squarcio nel ventre. Il drago si alza sulle zampe superiori pronto a sputare fuoco. ",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 32
    },
    {
        id: 32,
        text: "Tiro salvezza superiore a 6",
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 33,
        challenge: {
            limitScore: 6,
            goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 33 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    {
        id: 33,
        text: "Con un altro scatto indietreggi, sollevi la spada e con forza sfoderi un attacco verso il basso tagliando il soffio del drago.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 34
    },
    {
        id: 34,
        text: "L'area è incenerita, l'aria si fa pesante, è meglio finirla subito. Tira il dado e supera 8 per attacare",
        hasCrossroads: false,
        hasChallenge: true,
        goTo: 35,
        challenge: {
            limitScore: 8,
            goToOver: 0, //Riporta ad una parte con risultato inferiore al limitScore
            goTo: 35 //Riporta ad una parte con risultato superiore al limitScore
        },
    },
    {
        id: 35,
        text: "Il drago sta cercando di riprendersi. Corri cercando di raggiungere la sua coda, ma ti attacca con gli artigli, balzi di lato e con la tua spada squarci la zampa sinistra.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 36
    },
    {
        id: 36,
        text: "Un ruggito fa tremare il pavimento. La coda è proprio davanti a te. Riesci a saltarci sopra e a salire sulla sua schiena. Le scaglie emanano un calore cosi forte che rischia di scioglierti l'armatura ma la cosa piò soltanto infervorarti di più. Infondi sempre più magia e il cristallo sull'elsa della tua spada inizia a scatenare una luce blu intensa.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 37
    },
    {
        id: 37,
        text: "E' il momento. Sollevi la spada e la luce blu si trasforma in un'estensione della tua spada fatta di magia pura. Cali la spada sul collo del drago e un esplosione di luce riempie la stanza.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 38
    },
    {
        id: 38,
        text: "Un ultimo ruggito fa tremare ancor di più le rocce della zona facendo crollare alcuni pezzi dal soffitto. Il drago è sconfitto.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 39
    },
    {
        id: 39,
        text: "Il corpo senza vita del drago inizia a dissolversi lasciando per terra un cristallo nero. Lo consegni al Re come conferma della minaccia sconfitta. Eldoria è salva",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 40
    },
    {
        id: 41,
        text: 'fine game',
        hasCrossroads: false,
        hasChallenge: false,
    },
];

const storyArrayMage = [
    {
        id: 0,
        text: 'Sei morto!',
        hasCrossroads: false,
        hasChallenge: false,
    },
    {
        id: 1,
        text: "Nel cuore delle antiche foreste di Eldoria, spiccava la figura di Lyra, un'elfa giovane e ardente con occhi infuocati e chiome rosse come il tramonto. Ereditiera di una famiglia di maghi elfici specializzati nelle arti del fuoco, Lyra era la custode della fiamma magica che bruciava dentro di lei.",
        hasCrossroads: false,
        hasChallenge: false,
        goTo: 2,
    },
    {
        id: 2,
        text: 'Il tuo viaggio inizia nella Foresta Incantata. Davanti a te si presenta un bivio. Cosa fai?',
        hasCrossroads: true,
        hasChallenge: false,
        crossRoad: [
            {
                text: 'Prendi il sentiero illuminato dalla luna.',
                goTo: 3,
            },
            {
                text: "Segui il sentiero avvolto nell'oscurità.",
                goTo: 4,
            },
        ],
    },
    {
        id: 3,
        text: 'Il sentiero illuminato ti conduce a un chiaro di luna magico. Qui incontri un guardiano elfico.',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Chiedi al guardiano consigli sulla tua missione.',
                goTo: 5,
            },
            {
                text: 'Ringrazia il guardiano e prosegui da solo.',
                goTo: 6,
            },
        ],
    },
    {
        id: 4,
        text: 'Il sentiero oscuro ti porta a una radura infestata da creature oscure. Devi affrontare una sfida magica. Devi superare 5 per poter sconfiggere le creature oscure',
        hasChallenge: true,
        challenge: {
            limitScore: 5,
            goToOver: 8,
            goTo: 6,
        },
    },
    {
        id: 5,
        text: `'Il guardiano ti rivela una profezia: "Per sconfiggere il Drago delle Ombre, cerca l'antico artefatto nel Deserto delle Visioni."`,
        goTo: 7,
    },
    {
        id: 6,
        text: 'Prosegui da solo attraverso la foresta incantata. Trovi una pozione magica utile per il tuo viaggio.',
        goTo: 7,
    },
    {
        id: 7,
        text: 'Decidi di:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Dirigerti verso il Deserto delle Visioni.',
                goTo: 9,
            },
            {
                text: 'Esplorare le Caverne Oscure alla ricerca di informazioni.',
                goTo: 10,
            },
        ],
    },
    {
        id: 8,
        text: 'Non riesci a superare la sfida magica. Le creature oscure ti intrappolano e il tuo viaggio giunge a una fine prematura.',
        goTo: 0,
    },
    {
        id: 9,
        text: 'Nel Deserto delle Visioni, incontri il mercante magico Zephyr. Ti offre un oggetto magico a tua scelta:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Bacchetta di Fulmine: potente attacco magico.',
                goTo: 11,
            },
            {
                text: 'Elmo dell\'Invisibilità: possibilità di evitare gli attacchi nemici.',
                goTo: 11,
            },
        ],
    },
    {
        id: 10,
        text: 'Esplorando le Caverne Oscure, scopri un antico grimorio magico. Devi decidere se studiarlo o proseguire verso il Deserto delle Visioni.',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Studia il grimorio magico.',
                goTo: 12,
            },
            {
                text: 'Prosegui verso il Deserto delle Visioni.',
                goTo: 9,
            },
        ],
    },
    {
        id: 11,
        text: "Con il tuo nuovo potere magico, continui il viaggio. Arrivi alla Valle delle Ombre, dove il Drago custodisce l'Antica Torre del Crepuscolo.",
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Affronta direttamente il Drago.',
                goTo: 13,
            },
            {
                text: "Raggiungi l'Antica Torre del Crepuscolo senza attirare l'attenzione del Drago.",
                goTo: 14,
            },
        ],
    },
    {
        id: 12,
        text: 'Studiando il grimorio, acquisisci nuove abilità magiche. Il tuo potere cresce, ma il tempo stringe. Raggiungi il Deserto delle Visioni.',
        goTo: 9,
    },
    {
        id: 13,
        text: "Il Drago delle Ombre ti attacca con furore. Devi lanciare il dado per determinare l'esito dello scontro, Devi superare 15 per poter indebolire subito il dado, sennò continui il combattimento.",
        hasChallenge: true,
        challenge: {
            limitScore: 15,
            goTo: 16,
            goToOver: 15,
        },
    },
    {
        id: 14,
        text: "'Raggiungi l'Antica Torre del Crepuscolo senza attirare l\'attenzione del Drago. Qui trovi un portale magico che conduce direttamente alla tana del Drago.",
        goTo: 17,
    },
    {
        id: 15,
        text: "Con un tiro del dado, riesci comunque a respingere l'attacco del Drago. Prosegui il combattimento.",
        goTo: 16,
    },
    {
        id: 16,
        text: "'In uno scontro epico, utilizzi le tue abilità magiche e l'oggetto magico per indebolire il Drago delle Ombre.",
        goTo: 18,
    },
    {
        id: 17,
        text: 'Raggiungi la tana del Drago attraverso il portale magico. Trovi il Drago addormentato. Devi decidere:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Attacca il Drago mentre dorme.',
                goTo: 19,
            },
            {
                text: 'Cerca di comunicare con il Drago.',
                goTo: 20,
            },
        ],
    },
    {
        id: 18,
        text: 'Il Drago delle Ombre è sconfitto! La tua magia ha trionfato e Eldoria è salva.',
        goTo: 24,
    },
    {
        id: 19,
        text: 'Attacchi il Drago mentre dorme, ma si risveglia inaspettatamente. Devi affrontare una sfida finale. Per vincerla devi ottenere almeno 18',
        hasChallenge: true,
        challenge: {
            limitScore: 18,
            goToOver: 21,
            goTo: 22,
        },
    },
    {
        id: 20,
        text: 'Cerchi di comunicare con il Drago. Sorprendentemente, il Drago accetta di parlare. Rivela che il suo cuore è stato corrotto e chiede aiuto per liberarsi dalla malvagità.',
        goTo: 21,
    },
    {
        id: 21,
        text: 'Decidi di:',
        hasCrossroads: true,
        crossRoad: [
            {
                text: 'Aiutare il Drago a liberarsi dalla corruzione.',
                goTo: 23,
            },
            {
                text: 'Concludere il tuo viaggio sconfiggendo il Drago .',
                goTo: 22,
            },
        ],
    },
    {
        id: 22,
        text: 'Nonostante la durezza della battaglia, il tuo potere magico trionfa. Il Drago delle Ombre è sconfitto e il regno di Eldoria è finalmente al sicuro.',
        goTo: 24,
    },
    {
        id: 23,
        text: 'Ti unisci al Drago nella sua ricerca di redenzione e insieme, liberate il suo cuore dalla corruzione. Eldoria trova un alleato potente nel Drago restaurato e la pace prevale.',
        goTo: 24,
    },
    {
        id: 24,
        text: 'Fine Gioco',
    },
];


export function GameTry() {

    const { hero } = useParams()

    const getArrayStoryFromHero = (hero) => {  // in base al parametro di hero la funzione ci restituisce un array che andra nello state che verra usato per eseguire il map
        if(hero === "mage"){
             return storyArrayMage
        }else if(hero === "paladin"){
            return storyArrayPaladin
        }else {
            // default value (non necessaria)
            return storyArrayPaladin
        }
    }

    const [arrayToHero, setArrayToHero] = useState(getArrayStoryFromHero(hero)  ) //da non andare a modificare 
    const [userStoryArray, setUserStoryArray] = useState([arrayToHero[1]]);  //Parte da 1 perche 0 = morte!
    const [gameOver, setGameOver] = useState(false)

    //Funzione che gestisce l'avanzamento della storia con dei controlli sull'index.
    const handleUserChoice = (index) => {  //se la lunghezza è minore dell'array allora aggiorna lo state
        if (index >= 0 && index < arrayToHero.length) {
            setUserStoryArray((userStoryArray) => [...userStoryArray, arrayToHero[index]]);
            console.log(index);
        }
        if(index === arrayToHero.length-1 || index === 0) { //debug
            setGameOver(true)
        }
    };

    const handleDiceRoll = (step) => {
        const diceScore = Math.floor(Math.random() * 20) + 1;
        alert(`Hai ottenuto ${diceScore}`);
        //Se il numero uscito è maggiore di limitScore allore index prende il valore di goTo.
        if (diceScore > step.challenge.limitScore) {
            handleUserChoice(step.challenge.goTo); 
        // Se minore index prende il valore di goToOver.
        } else {
            handleUserChoice(step.challenge.goToOver); // se minore index prende il valore di goToOver
        }
    };

    const handleRestart = () => {
        setUserStoryArray([arrayToHero[1]]);
        setGameOver(false)
    }

    return (
        <div className="wrapper-game">
            <div className="container-game">
                <div className="container-text-game">
                    <div>
                        {userStoryArray.map((step, index) => {
                                return <Paragraph step={step} key={index}
                                    handleUserChoice={handleUserChoice}
                                    handleDiceRoll={handleDiceRoll}
                                    hideButton={userStoryArray.length > index + 1}
                                    gameOver={gameOver}
                                    handleRestart={handleRestart} />
                                })}
                    </div>
                </div>
            </div>
        </div>
    )
}