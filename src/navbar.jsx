import { Link, useNavigate } from "react-router-dom"
import "./home.css"
export function Navbar(){
    const navigate = useNavigate()
    function goHome(){
        navigate('home')
    }
    function goToRules(){
        navigate('rules')
    }
    return (
        <nav>
            <div className="navbar-container">
                <div>
                    <h2>Logo</h2>
                </div>
                <div>
                    <button onClick={goHome}>HOME</button>
                    <button>ABOUT</button>
                    <button onClick={goToRules}>RULES</button>
                </div>
            </div>
        </nav>
    )
}