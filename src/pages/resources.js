import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/navbar.css"
import "../../static/css/global.css"

export default () => (
  <div>
    <Navbar />
    <div className="paragraph">
      <Header headerText="Resources" />
      <p>Send us a message!</p>
    </div>
  </div>
)
