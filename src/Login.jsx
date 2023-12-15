import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "./userContext";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const notifyError = () => toast.error(`Errore: l'utente "${data.username}" risulta già registrato.`);
    const notifySuccess = () => toast.success(`Utente "${data.username}" registrato correttamente. Ora puoi effettuare il login!`);
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })
    const [showError, setShowError] = useState(false);
    const {user, setUser} = useUserContext();
    const [dbData, setDbData] = useState({});
    const [registerHandler, setRegisterHandler] = useState(false);

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        setData(prev => {
            return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            }
        })
    }

    // Prima chiamata fetch al server, serve ad ottenere e salvare nello state "dbData" i dati degi utenti nel database, in modo da poterne conoscere la lunghezza e poter controllare se un'utente esiste già.

    const fetchRemoteData = () => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/fullusers");
            const dataJson = await response.json();
            setDbData(dataJson);
        }
        fetchData();
    }

    // Funzione che gestisce il submit da parte dell'utente, controlla se le credenziali coincidono con quelle nel database remoto e, se si, sfrutta lo useNavigate per far visualizzare il componente Home.

    const handleSubmit = (event) => {
        event.preventDefault();
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/fullusers");
            const dataJson = await response.json();
            console.log(dataJson);
            dataJson.map(el => {
                if(el.username === data.username && el.password === data.password){
                    setUser(data);
                    navigate(`/${el.name}/${el.id}`);
                } else{
                    setShowError(true);
                }
            })
        }
        fetchData();
    }

    // Funzione che viene triggherata al click del button "registarti". Esegue un controllo per verificare la presenza delle credenziali inserite dall'utente nel database, e in caso affermativo mostra un alert di errore.
    // Dopo il controllo, esegue la registrazione del nuovo utente nel database, tramite una chiamata fetch con method 'POST'.

    const handleRegistration = (event) => {
        event.preventDefault();
        let control = false;
        dbData.map(el => {
            if(el.name === data.username){
                control = true;
            }})
        if(control){
            console.log("show error");
            notifyError();
        }else{
            fetch("http://localhost:3000/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'id': dbData.length + 1, // Qui viene sfruttato lo state "dbData" (con le info degli utenti in database) per creare un numero di ID sempre progressivo.
                    'username': data.username,
                    'password': data.password
                })
            }).then(notifySuccess())
        }
    }

    // Funzione che gestisce lo switch tra i button Login/Registrati (lo state registerHandler viene richiamato nell'operatore ternario a riga 115).

    const handleShowRegisterButton = () => {
        setRegisterHandler(p => !p);
    }

    useEffect(() => {
        try{
            fetchRemoteData();
            handleSubmit();
        } catch(error){
            console.error(error);
        }
    }, [user]) // Nell'array di dipendenza viene sfruttato lo state "user" che viene aggiornato ogni volta che viene richiamata la funzione "handleSubmit".

    return (
        <>
        <ToastContainer 
            position="top-center"
            reverseOrder={false}
         />
            <div className="form_container">
                <div className="login_form">
                    <h1 className="form_title">Benvenuto a <br/>Eldoria's Eclipse!</h1>
                    <form onSubmit={handleSubmit}>
                        <div>Username</div>
                        <input className={showError && "input_error"} required id='input_user' type="text" name='username' value={data.username} onChange={handleInputChange} placeholder="Username" />
                        <div>Password</div>
                        <input className={showError && "input_error"} required id="input_password" type="password" name='password' value={data.password} onChange={handleInputChange} placeholder="Password"/>
                        {showError && <h3 className="error_message">Credenziali errate.</h3>}
                        <div className="registration_handler">
                            {registerHandler ? <div onClick={handleShowRegisterButton}>Hai già un account? Accedi</div> : 
                                <div onClick={handleShowRegisterButton}>Non hai un account? Registrati</div>}
                            {/* <div className="remember">
                                <input type="checkbox" id='remember' name='remember' checked={data.remember} onChange={handleInputChange} />
                                <div>Ricordami</div>
                            </div> */}
                        </div>
                        <div className="buttons">
                            {!registerHandler && <button id="login_button" disabled={!data.username || !data.password}>Login</button> }
                            {registerHandler && <button id="signup_button" onClick={handleRegistration} disabled={!data.username || !data.password}>Registrati</button> }
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login