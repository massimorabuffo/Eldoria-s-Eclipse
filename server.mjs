import express from "express"; //installazione express
import pgPromise from "pg-promise"; //installazione pgPromise per il database
import jwt from "jsonwebtoken" // installazione jwt per la creazione e verifica del token
import 'dotenv/config'  //installazione dotenv per la SECRET
import cors from "cors"

//per provare con postman

//-post con http://localhost:3000/signup dove nel body / raw / json si mette un oggetto con username e password e ci dovrebbe tornare un messaggio di successo
//-post con http://localhost:3000/login dove nel body / raw / json si mette un oggetto con username e password un oggetto con anche il token
//-get con http://localhost:3000/logout dove in headers nella key si mette authorization e nel value Bearer seguito da valore del token(lo fa vedere anche nella lezione logout
// in piattaforma da min 10.38 )
//*IMPORTANTE se si vuole vedere il contenuto della tabella http://localhost:3000/fullusers farlo dopo aver fatto prima il signup perche sennò darà errore perchè la tabella è vuota

const pgp = pgPromise();
const db = pgp("postgres://postgres:postgress@localhost:5432/dndUsers");

const app = express();
app.use(express.json());
const PORT = 3000
app.use(cors());

db.none(`

DROP TABLE IF EXISTS users;

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    token TEXT
  );

  INSERT INTO users (username, password, token)
  VALUES ('pippo', 'pippo', 'null');

  COMMIT;

`);


app.get('/fullusers', async (req, res) => { //per vedere tutti i dati che ho nella tabella(usata principalmente per test)
    try {
      const users = await db.many(`SELECT * FROM users;`);
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json([{msg: "Problem fullusers"}]);
    }
  });



app.post("/signup", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      // Verifica se l'utente è già registrato facendo una ricerca nella tabella nel database
      const user = await db.oneOrNone(
        `SELECT * FROM users WHERE username=$1`,
        username
      );
  
      if (user) {
        // Se l'utente esiste, restituisci questo messaggio
        res.status(409).json({ msg: "Username already in use" });
      } else {
        // Se l'utente non esiste, inserisci l'utente nel database
        const { id } = await db.one(
          "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id",
          [username, password]
        );
  
        res.status(201).json({ msg: "Signup successful", id });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  });






app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Esegue una query sul database per cercare un utente con il nome utente fornito.
        const user = await db.one(`SELECT * FROM users WHERE username=$1`, username);
    
        // Verifica se l'utente esiste e se la password corrisponde.
        if (user && user.password === password) {
            // Se le credenziali sono corrette, genera un token JWT contenente l'ID utente e il nome utente.
            const payload = {
                id: user.id,
                username
            };
            //console.log(payload);  oggetto con id e username
            const { SECRET } = process.env;
            const token = jwt.sign(payload, SECRET);
            //console.log(token); valore del token
    
            // Aggiorna il token nel database per l'utente corrente.
            await db.none(`UPDATE users SET token=$2 WHERE ID=$1`, [user.id, token]);
    
            // Invia una risposta di successo contenente l'ID utente, il nome utente e il token.
            res.status(200).json({ id: user.id, username, token });
        } else {
            // Se le credenziali sono errate, invia una risposta di errore.
            res.status(400).json({ msg: "Username or password incorrect" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({msg: "Problem login"});
    }
});






// Middleware di autenticazione con token JWT.
const authenticateToken = (req, res, next) => {
    // Ottieni la chiave segreta da variabili d'ambiente.
    const { SECRET } = process.env;

    // Estrai il token dall'intestazione "Authorization" della richiesta.
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];//1 perche la prima parola sarà solitamente Bearer e poi ci sarà il valore del token

    // Se il token è assente, restituisci uno stato 401 (Unauthorized).
    if (!token) {
        return res.status(401).json({ msg: "Unauthorized: Missing token" });
    }

    // Verifica il token utilizzando la chiave segreta.
    jwt.verify(token, SECRET, (err, user) => {
        // Se ci sono errori nella verifica del token, restituisci uno stato 403 (Forbidden).
        if (err) {
            return res.status(403).json({ msg: "Forbidden: Invalid token" });
        }

        // Se il token è valido, assegna le informazioni utente alla richiesta e passa al middleware successivo.
        req.user = user;
        next();
    });
};

// Route per gestire il logout, autenticando prima l'utente con il middleware authenticateToken.
app.get("/logout", authenticateToken, async (req, res) => {
    try {
        // Ottieni la chiave segreta da variabili d'ambiente.
        const { SECRET } = process.env;

        // Estrai il token dall'intestazione "Authorization" della richiesta.
        const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

        // Decodifica il token utilizzando la chiave segreta.
        const decodedToken = jwt.verify(token, SECRET);

        // Ottieni l'ID utente dal payload del token decodificato.
        const userId = decodedToken.id;

        // Invalida il token associato all'utente (impostando il campo token su null nel database).
        await db.none(`UPDATE users SET token=NULL WHERE ID=$1`, [userId]);

        // Rispondi con uno stato 200 (OK) e un messaggio di successo.
        res.status(200).json({ msg: "Logout successful" });
    } catch (error) {
        // Se si verifica un errore durante il logout, loggalo e rispondi con uno stato 500 (Internal Server Error).
        console.error(error);
        res.status(500).json({ msg: "Problem logging out" });
    }
});




app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
