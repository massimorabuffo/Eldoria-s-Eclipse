import { Link } from "react-router-dom";
import Dice from "./Dice";
import { useUserContext } from "../userContext"

function Navbar({ onOpenSideBar, sidebarVisible, handleLogout }) {
  const { user } = useUserContext();

  return (
    <nav className="navbar">

      {!sidebarVisible &&
        <div className="menu-icon-hamburger" onClick={onOpenSideBar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      }
      {/* NAVBAR LEFT */}
      <div className="navbar-container-left">
        <div className="navbar-container-img">
          <img className="navbar-img" src="..\public\964642-dragon-Dungeons-amp-Dragons-DampD-red-black.png" alt="drago-rosso-navbar" />
        </div>
        <h2 className="Title">Eldoria's Eclipse</h2>
      </div>
      {/* NAVBAR MIDDLE */}
      <div className="navbar-container-middle">
        <div className="dice" id="animated-dice"><Dice /></div>
      </div>
      {/* NAVBAR RIGHT */}
      <div className="navbar-container-right">
        <ul className="nav-ul">
          <li className="list-nav">
            <button>
              <Link className="Tab" to="/home/:user">Home</Link>
            </button>
          </li>
          <li className="list-nav">
            <button>
              <Link className="Tab" to="/About">About</Link>
            </button>
          </li>
          <li className="list-nav">
            <button>
              <Link className="Tab" to="/Rules">Rules</Link>
            </button>
          </li>

          <li>
            <div className="user">
              <span>{user.username}<svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.625em"
                viewBox="0 0 512 512"
                id="arrow-down">
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 
            45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></span>

              <div className="dropdown-option">
                <div className="user-option">
                  <ul>
                    <li><a href="">Account</a></li>
                    <li><Link className="Tab" to="/">Logout</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;