import React, { useState } from 'react'
import '../Header/Header.scss'
// import CV from './assets/Graphiste_GOUBLET_Gessica.pdf'

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import photoProfil from "../../assets/Gessica_Goublet.webp"


//icons
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaSun, FaMoon } from 'react-icons/fa';

const Nav = ({ isDarkMode, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const nav =
    <ul style={{ pointerEvents: 'auto' }}>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={500}>
        A propos
      </Link></li>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500}>
        Projets
      </Link></li>
      <li><Link rel="stylesheet" onClick={handleClick} activeClass="active" to="socials" spy={true} smooth={true} offset={0} duration={500}>
        Contact
      </Link></li>
      <li><a className='cv' href='Portfolio/document/Graphiste_GOUBLET_Gessica.pdf' target='_blank' rel='noreferrer' alt="CV">
        CV
      </a></li>
    </ul>

  return (
    <header className='nav'>
      <div className={`header ${!isDarkMode ?'light' : ''}`}>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Image src={photoProfil} className='roundedCircle' alt="Developper (myself)"/>
            </Col>
          </Row>
        </Container>          
        <div className="menu-and-theme">
          <div onClick={handleClick} className="menu">
            <GiHamburgerMenu />
          </div>
          <div className='large small'>
            {nav}
          </div>
          {/* <div className={`theme-switch ${!isDarkMode ?'light' : ''}`} onClick={handleToggle} >
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Nav;

