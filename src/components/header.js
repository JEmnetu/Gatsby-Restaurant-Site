import { Link } from "gatsby"

import React from "react"
import { Navbar } from "react-bootstrap"

const Header = () => (
  <>
    <Navbar expand="sm" className=" d-flex justify-content-center pb-0 menu">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/menu">
            <li>Menu</li>
          </Link>

          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  </>
)

export default Header
