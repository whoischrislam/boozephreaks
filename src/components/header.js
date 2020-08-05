import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <Link to="/"><img className="Logo" src={require('../images/boozephreaks_logo.png')} />
</Link>
    <div className="HeaderGroup">
      <Link to="/events">Events</Link>
      <Link to="/hireus">Hire us</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/buy"><button>Shop</button></Link>
    </div>
</div>
)

/*
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
*/

export default Header
