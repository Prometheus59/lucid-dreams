import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/navbar.css"
import "../../static/css/global.css"
import "../../static/css/techniques.css"

export default () => (
  <div>
    <Navbar />
    <div className="paragraph">
      <Header headerText="Techniques" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        doloremque soluta, excepturi sapiente voluptates placeat porro nostrum
        vero nemo ea temporibus illo pariatur ratione assumenda aspernatur
        quidem accusamus eligendi magnam?
      </p>
      <div className="categories">
        <li>WBTB</li>
        <li>FILD</li>
        <li>WILD</li>
      </div>
    </div>
  </div>
)
