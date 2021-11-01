import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import "./Header.css"
import CloseMenu from "../images/close.svg"

const Header = () => {
  const [openIt, setOpenIt] = useState()
  const [active, setActive] = useState()

  const collapseHandler = openIt => {
    setOpenIt(openIt)

    if (openIt) setActive("openNav")
    else setActive("closeNav")
  }

  return (
    <div className="navTop">
      <Link to="/" className="navLink">
        <StaticImage
          src="../images/logo.png"
          alt="Company Logo"
          width={150}
          placeholder="tracedSVG"
          quality="80" />
      </Link>
      <div className="navMain">
        <Link to="/" className="navLink">Home</Link>
        <Link to="/" className="navLink">About Me</Link>
        <Link to="/" className="navLink">Freebies</Link>
        <Link to="/" className="navLink">Blog</Link>
        <Link to="/" className="navLink">Contact</Link>
      </div>
      <div className="navResponsive" onClick={e => collapseHandler(!openIt)}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div className={`responsiveTop ${active}`}>
        <div className="container2 close" onClick={e => collapseHandler(!openIt)}>
          <img width="20px" src={CloseMenu} alt="" />
        </div>

        <Link to="#" className="respMenu">Home</Link>
        <Link to="#" className="respMenu">About me</Link>
        <Link to="#" className="respMenu">Freebies</Link>
        <Link to="#" className="respMenu">Blog</Link>
        <Link to="#" className="respMenu">Contact</Link>
      </div>
    </div>
  )
}

export default Header
