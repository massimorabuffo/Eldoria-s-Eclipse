import { Link} from "react-router-dom";
import Dice from "./Dice";

function Navbar( {onOpenSideBar, sidebarVisible, handleLogout}) {



  return (
    <nav className="navbar">
     
     {!sidebarVisible &&
          <div className="menu-icon-hamburger" onClick={onOpenSideBar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
      }

      <li className="List-Nav-Flex-Mobile">
          <div className="dice" id="animated-dice">
            <Dice />
          </div>
          <h2 className="Title">Dragons</h2>
        </li>




      <ul className="nav-container">


        <li className="List-Nav ">
        <button onClick={handleLogout}>
            <Link className="Tab" to="/">
              Logout
            </Link>
          </button>
        </li>

        <li className="List-Nav">
          <button>
            <Link className="Tab" to="/home/:user">
              Home
            </Link>
          </button>
        </li>

        <li className="List-Nav-Flex">
          <div className="dice" id="animated-dice">
            <Dice />
          </div>
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