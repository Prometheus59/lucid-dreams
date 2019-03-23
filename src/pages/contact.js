import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/navbar.css"
import "../../static/css/global.css"

export default () => (
  <div>
    <Navbar />
    <div className="paragraph">
      <Header headerText="Contact" />
      <p>
        Check out{" "}
        <a href="http://www.ryankarumanchery.info">my other projects</a>
      </p>
      <p>Email me at: example@gmail.ca</p>
    </div>
  </div>
)
