import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
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
        navigate(`/home/${data.username}`);
    }

    return (
        <div className="form_container">
            <div className="login_form">
                <div className="form_title">
                    <h1>Benvenuto a <br/>D&D Project</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>Username</div>
                    <input required id='input_user' type="text" name='username' value={data.username} onChange={handleInputChange} placeholder="Username" />
                    <div>Password</div>
                    <input required id="input_password" type="password" name='password' value={data.password} onChange={handleInputChange} placeholder="Password"/>
                    <div className="login_checkbox">
                        <div>
                            <input type="checkbox" id='remember' name='remember' checked={data.remember} onChange={handleInputChange} />
                            <div>Ricordami</div>
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