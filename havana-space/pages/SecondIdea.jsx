import { FacebookSVG } from './facebook';

import './SecondIdea.scss';

export const SecondIdea = () => {
  return (
    <div className="container">
      <div className="images-container">
        <div className="first">
          <img src="../resources/elephant.jpeg" alt="elephant paint" />
          <img src="../resources/2_femmes_main_blue.jpeg" alt="two women paint" />
          <img src="../resources/femme_multicolor.jpeg" alt="multicolor woman paint" />
          <img src="../resources/femme_penche_main_orange_black.jpeg" alt="women orange color" />
        </div>
        <div className="second">
          <img src="../resources/visage_ville_lunette.jpeg" alt="face city glass" />
          <img src="../resources/walking_african_people.jpeg" alt="walking african peopple" />
          <img src="../resources/abstract_art_multicolor.jpeg" alt="elephant paint" />
          <img src="../resources/abstract_art_circle.jpeg" alt="elephant paint" />
        </div>
      </div>
      <div className="text">
        <p><strong>Espace Havana</strong> est un espace dédié a l'Art Nigérian regroupant les œuvres d'un collectif d'artistes
          toutes et tous impliqués dans la transmission d'un message fort.</p>
        <p>La culture est transversale seule compte l'émotion présente.
          Nous vous proposons une série de toiles diverses et variées (huile, acrylique, ...).</p>
        <p>Retrouvez notre exposition à Ambarès au :</p>
        <strong className="address">
          8 Chemin de la Hourcade<br />
          33440 Ambarès-et-Lagrave<br />
          France
        </strong>
        <div className="social-media">
          <p>Contactez-nous :</p>
          <a href="https://www.facebook.com/Espace-Havana-1399197553665685" className="facebook button">
            <FacebookSVG />
            <div className="img-placeholder" />
            <div className="brand">Facebook</div>
          </a>
          <a href="https://www.instagram.com/espace_havana" className="instagram button">
            <img className="logo" src="../resources/instagram_logo.png" alt="instagram logo" />
            <img className="profil-picture" src="../resources/instagram.jpg" alt="instagram profil picture" />
            <div className="brand"><span>Instagram</span></div>
          </a>
        </div>
      </div>
    </div>
  );
}