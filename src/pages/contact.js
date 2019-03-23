import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/navbar.css"

export default () => (
  <div>
    <Navbar />
    <Header headerText="Contact" />
    <p>Send us a message!</p>
    <p>Email me at: example@gmail.ca</p>
  </div>
)
