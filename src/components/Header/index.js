// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="img-heading-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="ul-container-style">
      <li>
        <Link className="list-style" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-style" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-style" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
