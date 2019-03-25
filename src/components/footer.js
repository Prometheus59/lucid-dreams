import React from "react"
import "../../static/css/global.css"
import { Link } from "gatsby"

export default () => (
  <div className="footer">
    <div className="sub-footer">
      <h3>Website Navigation</h3>
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="link" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="link" to="/blog">
          Blog
        </Link>
      </li>
      <li>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="link" to="/resources">
          Resources
        </Link>
      </li>
    </div>
    <div className="sub-footer">
      <h3>Connect with me</h3>
      <li>LinkedIn</li>
      <li>GitHub</li>
      <li>ryankarumanchery.info</li>
      <li>Stack Overflow</li>
    </div>
    <div className="sub-footer">
      <h3>Learn More</h3>
    </div>
  </div>
)
