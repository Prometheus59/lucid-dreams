import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/index.css"
import "../../static/css/navbar.css"

export default () => (
  <div>
    <Navbar />
    <Header headerText="Lucid Dreaming Application" />
    <p>Learn how to lucid dream</p>
  </div>
)
