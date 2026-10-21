import React from 'react'

// import Moi from '../../assets/Gessica_Goublet.png';
import '../About/About.scss';
import { ReactComponent as AnimatedLogo } from '../../assets/animations/Working_at_home.svg';

const About = () => {
  return (
    <div className='about' >
      <h2 id="about">À propos de moi</h2>
      <div className="words">
      Profil pluridisciplinaire alliant créativité visuelle, rigueur éditoriale et sensibilité humaine. <br></br> 
      Je conçois des identités graphiques, des supports de communication et des animations fluides qui donnent du sens et du mouvement à vos messages. <br></br>
      Mettre les idées en mouvement et raconter des histoires visuelles qui touchent juste, c'est ce qui m'anime au quotidien.
      </div>
         <div className="animWorking">
            <AnimatedLogo className="Working_at_home.svg" alt="Developper (myself)"/>
          </div>
    </div>
  )
}
export default About;
