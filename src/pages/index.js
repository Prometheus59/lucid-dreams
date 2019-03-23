import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import "../../static/css/index.css"
import "../../static/css/navbar.css"
import icon from "../../static/images/dreaming.png"
import Triplecard from "../components/triplecard"

export default () => (
  <div>
    <Navbar />
    <div className="centered-header">
      <Header headerText="Unlock your dreams" />
      <img
        className="centered-icon"
        src={icon}
        alt="img created by Smashicons on flaticon"
      />

      <p>Learn how to lucid dream</p>
      <Triplecard />
    </div>
    <div className="info">
      <h3>Why Lucid Dream?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        iusto enim ea sunt repudiandae nesciunt quibusdam itaque nemo deserunt
        officia?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, facilis
        animi excepturi maxime temporibus, porro repudiandae quia ut magnam
        molestiae eos harum sapiente atque eveniet distinctio rem. Numquam
        quibusdam ullam quam excepturi facilis cupiditate cumque? Iusto possimus
        incidunt aliquam provident.
      </p>
    </div>
  </div>
)
