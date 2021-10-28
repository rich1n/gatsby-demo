import React from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import "./Header.css"

const Header = () => {
  return (
    <div className="navTop">
      <Link to="/" className="navLink">
        <StaticImage
          src="../images/logo.png"
          alt="Company Logo"
          width={100}
          height={100}
          placeholder="tracedSVG"
          quality="80" />
      </Link>
      <div className="navMain">
        <Link to="#" className="navLink">
          Home
        </Link>
        <Link to="#" className="navLink">
          About Me
        </Link>
        <Link to="#" className="navLink">
          Freebies
        </Link>
        <Link to="#" className="navLink">
          Blog
        </Link>
        <Link to="#" className="navLink">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
