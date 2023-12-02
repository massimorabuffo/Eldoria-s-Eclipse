import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "./userContext";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })
    const [counter, setCounter] = useState(0);
    const [showError, setShowError] = useState(false);
    const {user, setUser} = useUserContext();
    const [dbData, setDbData] = useState(0);

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

    const fetchRemoteData = () => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/users");
            const dataJson = await response.json();
            setDbData(dataJson);
        }
        fetchData();
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setCounter(prev => prev++);
        const fetchData = async () => {
            const response = await fetch("http://localhost:3000/users");
            const dataJson = await response.json();
            dataJson.map(el => {
                if(el.name === data.username && el.password === data.password){
                    setUser(data);
                    navigate(`/${el.name}/${el.id}`);
                } else{
                    setShowError(true);
                }
            })
        }
        fetchData();
    }

    const handleRegistration = (event) => {
        event.preventDefault();
        let control = false;
        dbData.map(el => {
            if(el.name === data.username){
                control = true;
            }})
            if(control){
                alert(`Errore: l'utente "${data.username}" risulta già registrato.`)
            }else{
                fetch("http://localhost:3000/users", {
                    method: 'POST',
                    headers: {
                       'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                       'id': dbData.id + 1, 
                       'name': data.username,
                       'password': data.password
                    })
                }).then(response => console.log(response.json().length))
                .then(alert(`Utente "${data.username}" registrato correttamente. Ora puoi effettuare il login!`))
            }
    }

    useEffect(() => {
        try{
            fetchRemoteData();
        }catch(error){
            console.error(error);
        }
    }, [])

    useEffect(() => {
        try{
            handleSubmit();
        } catch(error){
            console.error(error);
        }
    }, [counter])

    return (
        <>
            <div className="form_container">
                <div className="login_form">
                    <div className="form_title">
                        <h1>Benvenuto a <br/>D&D Project</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>Username</div>
                        <input className={showError && "input_error"} required id='input_user' type="text" name='username' value={data.username} onChange={handleInputChange} placeholder="Username" />
                        <div>Password</div>
                        <input className={showError && "input_error"} required id="input_password" type="password" name='password' value={data.password} onChange={handleInputChange} placeholder="Password"/>
                        {showError && <h3 className="error_message">Credenziali errate.</h3>}
                        <div className="login_checkbox">
                            <div className="remember">
                                <input type="checkbox" id='remember' name='remember' checked={data.remember} onChange={handleInputChange} />
                                <div>Ricordami</div>
                            </div>
                            <button onClick={handleRegistration} disabled={!data.username || !data.password}>Registrati</button>
                        </div>
                        <button id="login_button" disabled={!data.username || !data.password}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login