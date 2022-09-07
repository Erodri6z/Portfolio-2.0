import { NavLink } from "react-router-dom"
import '../../styles/nav.css'

const Nav = () => {
  return (
    <nav>
      <div id="nav">
        <ul>
          <li><NavLink className="nav-item" to="/" >Home</NavLink></li>
          <li><NavLink className="nav-item" to="/Info" >About</NavLink></li>
          <li><NavLink className="nav-item" to="/Skill">Skills</NavLink></li>
          <li><NavLink className="nav-item" to="/Projects">Projects</NavLink></li>
          <li><NavLink className="nav-item" to="/Contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav