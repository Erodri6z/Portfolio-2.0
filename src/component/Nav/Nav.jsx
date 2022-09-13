import { NavLink } from "react-router-dom"
import '../../styles/nav.css'

const Nav = () => {
  return (
    <nav>
      <div id="nav">
        <ul>
          <li>
            <NavLink className="nav-item" to="/" >
              <span className="material-symbols-outlined">home</span>
              </NavLink>
            </li>
          <li>
            <NavLink className="nav-item" to="/Info" >
              <span className="material-symbols-outlined">info</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Skill">
              <span className="material-symbols-outlined">code</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Projects">
              <span className="material-symbols-outlined">web</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-item" to="/Contact">
              <span className="material-symbols-outlined">contact_phone</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav