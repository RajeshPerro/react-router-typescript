import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
     <nav className="nav-wrapper blue darken-2">
              <div className="container">
                  <Link to="/" className="brand-logo">MySite</Link>
                  <ul className="right">
                      <li><Link to="/home">Home</Link></li>
                      <li><NavLink to="/company">Company</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                  </ul>
              </div>
     </nav>
    </div>
  )
}
