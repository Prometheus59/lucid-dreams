import React from "react"
import "../../static/css/global.css"
import { Link } from "gatsby"

export default () => (
  <div className="footer">
    <div className="sub-footer">
      <h4>Website Navigation</h4>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/resources">Resources</Link>
      </li>
    </div>
    <div className="sub-footer">
      <h4>Connect with me</h4>
    </div>
    <div className="sub-footer">
      <h4>Learn More</h4>
    </div>
  </div>
)
