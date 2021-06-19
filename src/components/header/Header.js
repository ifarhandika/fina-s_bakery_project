import React from "react"
import './header.css'
import {Link} from 'react-router-dom'
import {
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">Fina's Bakery</Link>
      <ul className="nav-links">
        <Link to="/desserts">Desserts</Link>
        <Link to="/gifts">Gifts</Link>
        <Link to="/delivery">Delivery</Link>
        <Link to="/visit-us">Visit Us</Link>
      </ul>
      <div className="accounts">
        <li>
          <FontAwesomeIcon icon={faSearch} />
        </li>
        <li>
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li>
          <FontAwesomeIcon icon={faShoppingBag} />
        </li>
      </div>
    </div>
  )
}

export default Header
