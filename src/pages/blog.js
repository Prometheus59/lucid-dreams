import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/global.css"

export default () => (
  <div>
    <Navbar />
    <div className="paragraph">
      <Header headerText="Blog" />
      <li>Article</li>
      <li>Article</li>
      <li>Article</li>
      <li>Article</li>
    </div>
  </div>
)
