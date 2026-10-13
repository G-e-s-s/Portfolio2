import React from 'react'

// import Moi from '../../assets/Gessica_Goublet.png';
import '../About/About.scss'

const About = () => {
  return (
    <div className='about' >
      <h2 id="about">À propos de moi</h2>
      <div className="words">
      Profil pluridisciplinaire alliant créativité visuelle, rigueur éditoriale et sensibilité humaine. <br></br> 
      Je conçois des identités graphiques, des supports de communication et des animations fluides qui donnent du sens <br></br> et du mouvement à vos messages. <br></br>
      Mettre les idées en mouvement et raconter des histoires visuelles qui touchent juste, c'est ce qui m'anime au quotidien.
      </div>
      {/* <div>
        <img src={Moi} alt="Gessica Goublet" />
      </div> */}
    </div>
  )
}
export default About;
