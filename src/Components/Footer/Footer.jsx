import React from 'react';
import { animateScroll } from 'react-scroll';

//icons
import { AiFillGithub, AiFillMail, AiFillLinkedin} from 'react-icons/ai';
import { FaBehance, FaDiscord } from "react-icons/fa6";
import { CgArrowLongUp } from 'react-icons/cg';


import '../Footer/Footer.scss';

const Footer = () => {
  return (
    <footer className='socials'>
      <h2>Contactez-moi</h2>
      <div className="social">
        <div className='behance'>
          <FaBehance />
            <p>Behance</p>
          <a href="https://www.behance.net/gessicagoublet" target='_blank' rel='noreferrer'>Mes projets</a>
        </div>
        {/* <div className='gitContact'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/G-e-s-s" target='_blank' rel='noreferrer'>Mes projets</a>
        </div> */}
        <div className='mail'>
          <AiFillMail />
            <p>Mail</p>
          <a href="mailto:gess_06570@hotmail.fr">M'écrire</a>
        </div>
        <div className='discord'>
          <FaDiscord />
            <p>Discord</p>
          <a href="https://www.discord.com/users/756043362536128572" target='_blank' rel='noreferrer'>M'ajouter</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://www.linkedin.com/in/gessica-goublet" target='_blank' rel='noreferrer'>M'écrire</a>
        </div>
      </div>
      <div className='arrow' onClick={() => animateScroll.scrollToTop()}><CgArrowLongUp /></div>
      <div><p id='droit'>©2026 Gessica Goublet, Tous droits réservés.</p></div>
  </footer>
  )
}

export default Footer