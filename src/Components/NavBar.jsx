import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Dice from "./Dice";

function Navbar() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <nav className="navbar">
      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`}>
        <form className="form-side">
          <input className="NickName" type="text" placeholder="Nick-Name" />
          <button className="Gioca-Ora" type="submit">
            Nuova Partita
          </button>
        </form>
      </div>
      <ul className="nav-container">
        <li className="List-Nav">
          <button className="" onClick={toggleSidebar}>
            <img
              className="Omino"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/2048px-Hamburger_icon_white.svg.png"
              alt=""
            />
            <h3 style={{ color: "white" }}></h3>
          </button>
        </li>

        <li className="List-Nav">
          <button>
            <Link className="Tab" to={`/:user/:id`}>
              Home
            </Link>
          </button>
        </li>
        <li className="List-Nav">
          <div className="dice" id="animated-dice">
            <Dice />
          </div>
        </li>
        <li className="List-Nav">
          <h2 className="Title">Dragons</h2>
        </li>

        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/About">
              About
            </Link>
          </button>
        </li>
        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/Rules">
              Rules
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
