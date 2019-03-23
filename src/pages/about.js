import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/navbar.css"

export default () => (
  <div>
    <Navbar />
    <Header headerText="About" />
    <p>About text</p>
  </div>
)
