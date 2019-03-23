import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="navbar">
    <li>
      <Link to="/">home</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
    <li>
      <Link to="/blog">blog</Link>
    </li>
    <li>
      <Link to="/contact">contact</Link>
    </li>
    <li>
      <Link to="/resources">resources</Link>
    </li>
  </div>
)
