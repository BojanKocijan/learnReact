import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
      <Link to="/cakes">Cakes</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/workshops">Workshops</Link>
      <Link to="/buy"><button>Order now</button></Link>
    </div>
  </div>
)

export default Header
