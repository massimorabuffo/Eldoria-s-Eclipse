import { useState } from "react"

const Login = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

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

    const handleSubmit = () => {

    }

    return (
        <div className="form_container">
            <div className="login_form">
                <div className="form_title">
                    <h1>Benvenuto a D&D Project</h1>
                    <h4>Inserisci il tuo username e password</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <input required id='input_user' type="text" name='username' value={data.username} onChange={handleInputChange} placeholder="Username" />
                    <input required id="input_password" type="password" name='password' value={data.password} onChange={handleInputChange} placeholder="Password"/>
                    <div className="login_checkbox">
                        <div>
                            <input type="checkbox" id='remember' name='remember' checked={data.remember} onChange={handleInputChange} />
                            <label htmlFor="remember">Ricordami</label>
                        </div>
                        <a href="#">Recupera credenziali</a>
                    </div>
                    <button disabled={!data.username || !data.password}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login