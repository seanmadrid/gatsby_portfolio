// import { Link } from "gatsby"
import React from "react"
import Logo from "../images/sean_logo.png"
import { Link } from 'gatsby'

class MobileMenu extends React.Component {
  
  constructor() {
    super();
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.state = {
      opened: "closed"
    }
  }

  openMenu() {
    this.setState({
      opened: "opened"
    });
  }

  closeMenu() {
    this.setState({
      opened: "closed"
    });
  }

  render() {
    return (
      <div>
        <div className={`mobile-menu ${this.state.opened}`} onChange={this.closeMenu}>
            <div className="logo-wrap">
              <Link to="/" onClick={this.closeMenu} className="mobile-home-link"><img src={Logo} alt="Sean Madrid's Logo" /></Link>
            </div>
            <div className="mobile-menu-wrap">
              <Link to="/work" className="work-link" onClick={this.closeMenu}>Work</Link>
              <Link to="/about" className="about-link" onClick={this.closeMenu}>About</Link>
              <Link to="/cv" className="resume-link" onClick={this.closeMenu}>CV</Link>
              <Link to="/contact" className="contact-link" onClick={this.closeMenu}>Contact</Link>
            </div>
            <div className="close" onClick={this.closeMenu}>×</div>
        </div>
        <div className="hamburger" onClick={this.openMenu}>•••</div>
      </div>
    );
  }
}

 
class DesktopMenu extends React.Component {
  render() {
    return (
      <div className={`menuWrap desktop-menu`}>
        <div className="menu">
          <Link to="/work" className="work-link">Work</Link>
          <Link to="/about" className="about-link">About</Link>
          <Link to="/cv" className="resume-link">CV</Link>
          <Link to="/contact" className="contact-link">Contact</Link>
        </div>
      </div>
    );
  }
}

class ProfileIcons extends React.Component {
  render() {
    return (
      <div className="profile-icons">
        <a href="https://www.linkedin.com/in/sean-madrid-67190240/" target="_blank" rel="noopener noreferrer" className="linkedin">LinkedIn</a>
        <a href="https://github.com/seanmadrid" target="_blank" rel="noopener noreferrer" className="github">GitHub</a>
        <a href="https://codepen.io/seanmadrid" target="_blank" rel="noopener noreferrer" className="codepen">Codepen</a>
      </div>
    );
  }
}
 
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="logo-wrap">
          <Link to="/"><img src={Logo} alt="Sean Madrid's Logo" /></Link>
        </div>
        <ProfileIcons />
        <DesktopMenu />
        <MobileMenu />
      </header>
    );
  }
}

export default Header
