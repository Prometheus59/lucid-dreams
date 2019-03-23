import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="navbar">
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
)
