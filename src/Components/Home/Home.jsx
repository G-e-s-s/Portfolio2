import React from 'react';

import '../Home/Home.scss';

import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-scroll';


const Home = () => {
  return (
    <div className='home' id='home'>
      <div className="home-text">
        <div className='name'>
          <h1 className='gradientText'>
           Gessica Goublet
          </h1>
        </div>
        <TypeWriterEffect
          cursorColor="#A2374F"
          multiText={[
            "Supports Imprimés & Digitaux",
            "Gestion des réseaux sociaux",
            "Packaging",
            "Illustration",
            "Identité Visuelle & Branding",
            "Motion Design",
            "Webdesign"
          ]}
          multiTextLoop={true}
          multiTextDelay={1500}
          typeSpeed={40}
        />
        <div className="btns">
          <Link className='btn1' activeClass="active" to="mail" spy={true} smooth={true} offset={0} duration={500}>
            Contactez-moi
          </Link>
          <a className='btn2' href='https://www.behance.net/gallery/257514001/Portfolio-2025-2026' target='_blank' rel='noreferrer'>
            Mon portfolio
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home;
