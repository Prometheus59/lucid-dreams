import React from "react"
import Header from "../components/header"
import Navbar from "../components/navbar"
import { Link } from "gatsby"
import "../../static/css/index.css"
import "../../static/css/navbar.css"
import "../../static/css/global.css"
import placeholder from "../../static/images/greg-rakozy-38802-unsplash.jpg"
import icon from "../../static/images/dreaming.png"
import Triplecard from "../components/triplecard"
import Footer from "../components/footer"

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
      <button>
        <Link to="/about">Get Started</Link>
      </button>
      <Triplecard />
    </div>
    <div className="paragraph make-card">
      <h3>What is lucid dreaming</h3>
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
        natus eum laudantium sequi fuga labore, cupiditate sint accusamus
        explicabo, sapiente adipisci reprehenderit? Dicta, quibusdam molestiae
        delectus similique explicabo doloremque, veritatis, praesentium odio
        quisquam fugit soluta dolorum. Neque quibusdam maxime quod suscipit nam
        consequuntur in atque tempore, adipisci vitae, voluptates aspernatur
        eligendi sit dolorum? Eligendi veritatis ipsam nulla at in molestias
        earum, recusandae amet perferendis eum qui sequi quisquam odit labore!
      </p>
    </div>
    <div className="card-pic">
      <div className="paragraph make-card-left">
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
          quibusdam ullam quam excepturi facilis cupiditate cumque? Iusto
          possimus incidunt aliquam provident.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus,
          natus eum laudantium sequi fuga labore, cupiditate sint accusamus
          explicabo, sapiente adipisci reprehenderit? Dicta, quibusdam molestiae
          delectus similique explicabo doloremque, veritatis, praesentium odio
          quisquam fugit soluta dolorum. Neque quibusdam maxime quod suscipit
          nam consequuntur in atque tempore, adipisci vitae, voluptates
          aspernatur eligendi sit dolorum? Eligendi veritatis ipsam nulla at in
          molestias earum, recusandae amet perferendis eum qui sequi quisquam
          odit labore!
        </p>
      </div>
      <img className="card-image" src={placeholder} alt="placeholder" />
    </div>
    <div className="paragraph">
      <h3>How to begin</h3>
      <Link to="/techniques">Techniques</Link>
    </div>
    <Footer />
  </div>
)
