import { useNavigate } from "react-router-dom";

function Sidebar(props) {


  const navigate = useNavigate();

  return(
    <div className={`sidebar visible `}>

    <div className="posizione-x">
      <div class="menu-icon-hamburger-x" onClick={props.onClose}>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </div>

    <div className="posizione-sidebar">
      <div className="Tab" onClick={()=>{
        navigate("/home/:user")
        props.onClose()
      }}>
          Home
      </div>
      <div className="Tab"onClick={()=>{
        navigate("/About")
        props.onClose()
      }}>
          About
      </div>
      <div className="Tab"onClick={()=>{
        navigate("/Rules")
        props.onClose()
      }}>
          Rules
      </div>
      <div className="Tab"onClick={()=>{
        props.handleLogout()
        navigate("/")
        props.onClose()
      }}>
          Logout
      </div>
    </div>

  </div>


  

  )
}

export default Sidebar;