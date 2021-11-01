import React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import "./Body.css"

const Body = () => {
  return (
    <div className="headerMain">
      <div className="header1">
        <div className="header2">
          <h2 className="title1">Hi, Welcome!</h2>
          <h1 className="subtitle">Grade is good at explaining what I'm doing</h1>
          <button className="BtnMain">Book an Appointment</button>
        </div>
        <div className="header3">
          <StaticImage 
            src="../images/banner.png"
            alt="Main Banner"
            className="mainBanner"
            width={1000}
            placeholder="tracedSVG"
            quality="80"
          />
        </div>
      </div>
    </div>
  )
}

export default Body
