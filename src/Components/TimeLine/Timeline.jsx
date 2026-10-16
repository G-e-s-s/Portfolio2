import React from "react";

import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as AnimatedLogo } from '../../assets/animations/Point_background.svg';

import '../TimeLine/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Mon parcours</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2025"
            iconStyle={{ color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Motion Designer 2D/3D</h2>
            <h3 className="vertical-timeline-element-subtitle">Ecole MJM Graphic Design à Rennes</h3>
            <p>
              / Diplômée en 2026 <br></br>
              • Pré-Production | Rédaction du cahier des charges, moodboard, storyboard, animatique. <br></br>
              • Animation et Compositing | Principes fondamentaux de l'animation avec After Effects, Animate et Cinema 4D. <br></br>
              • Animation 3D | Modélisation 3D, texturing, lighting, rigging. <br></br>
              • Post-Production | Export et encodage selon médias, colorimétrie et étalonnage, finalisation du rendu. <br></br>
              • Sound Design | Mixage et cohérence audio-image. <br></br>
              • Montage | Pré-montage, dérushage, construction du rythme. <br></br>
              • Présentation client et livraison multisupports | Structuration des dossiers et assets, expliquer un concept. <br></br>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - 2025"
            iconStyle={{ color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Infographie</h2>
            <h3 className="vertical-timeline-element-subtitle">Ecole MJM Graphic Design à Rennes</h3>
            <p>
              / Diplômée en 2025 <br></br>
              • Adobe Photoshop | Photomontages, retouches visuelles. <br></br>
              • Adobe Illustrator | Illustrations vectorielles, logotypes, motifs. <br></br>
              • Adobe InDesign | Mises en page imprimées et digitales. <br></br>
              • Culture graphique | Veille, analyse et culture du graphisme. <br></br>
              • Illustration digitale et traditionnelle | Techniques de dessin. <br></br>
              • Communication visuelle | Stratégie de communication visuelle, déclinaison d’une identité à 360°. <br></br>
              • Packaging | Découvrir et pratiquer la communication par l’emballage produit.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2023 - 2024"
            iconStyle={{ color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Développeur intégrateur web</h2>
            <h3 className="vertical-timeline-element-subtitle">OpenClassrooms</h3>
            <p>
              / Diplômée en 2024 <br></br>
              • HTML - CSS <br></br>
              • Javascript <br></br>
              • Gestion de projet <br></br>
              • React <br></br>
              • Optmisation SEO et performances du site <br></br>
              • Acessibilité et référencement <br></br>
              • Express et Node JS           
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Avril - Mai 2023"
            iconStyle={{ color: 'antiquewhite' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Stage Community Management et <br></br> Design Graphique</h2>
            <h3 className="vertical-timeline-element-subtitle">Des Sources Studio à Toulon</h3>
            <p>
              • Design graphique | Utilisation des logiciels de la suite Adobe.<br></br>
              • Graphisme web | Réalisation du design et de l'identité visuelle d'un site web.<br></br>
              • Charte graphique et création de maquettes.<br></br>
              • Supports de communications digitaux (réseaux sociaux, site internet, etc) et éditoriaux (marque-page, affiches, brochures, etc). <br></br>
              • Traitement d'images numériques et mise en pages.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Mai - Juin 2022"
            iconStyle={{ color: 'antiquewhite' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Stage aux Editions "La Gauloise"</h2>
            <h3 className="vertical-timeline-element-subtitle">Editions "La Gauloise" à Vence</h3>
            <p>
            • Correction et mise en page de manuscrits. <br></br>
            • Recherche iconographique, élaboration et rédaction de 4ᵉ de couverture et d'argumentaires.<br></br>
            • Préparations et participation aux événements.<br></br>
            • Relations avec les auteurs et les points de vente. <br></br>
            • Supports de communications digitaux (mailing, réseaux sociaux, site internet, etc) et éditoriaux avec la suite Adobe (brochures, marque-page, flyers, etc).
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ color: 'antiquewhite' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Licence de Psychologie</h2>
            <h3 className="vertical-timeline-element-subtitle">Université Jean-Jaurès à Toulouse</h3>
            <p>
            / Diplômée en 2023
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
         <div className="decos">
            <AnimatedLogo className="Point_background.svg"/>
          </div>
      </div>
    </div>
  );
}

export default Timeline;