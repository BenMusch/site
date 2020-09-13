import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item logo" title="Logo">
              <img src={logo} alt="Cole Valley Haighy Allies" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <div className="navbar-item is-hoverable has-dropdown">
                <Link className="navbar-link" to="/about">About</Link>

                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/about">CVHA FAQ</Link>
                  <Link className="navbar-item" to="/about/730">730 Stanyan FAQ</Link>
                </div>
              </div>
              <Link className="navbar-item" to="/contact">
                Contact & Get Involved
              </Link>
              <div className="navbar-item is-hoverable has-dropdown">
                <a className="navbar-link" href="#">Sign Our Petitions</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="https://forms.gle/sWWWWKem2NuWkPUk8">
                    Support Safe Sleeping Sites and Low-Income Housing
                  </a>
                  <a className="navbar-item" href="https://www.change.org/p/mayor-london-breed-demand-for-a-humane-and-public-health-based-approach-to-homelessness-in-san-francisco?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=8e35c010-bb4b-11ea-99da-1d80430f666d">
                    Demand Humane Homelessness Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
