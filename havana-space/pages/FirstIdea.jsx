import './FirstIdea.scss';

export const FirstIdea = () => {
  return (
    <div className="images-container">
      <div className="right between image-container">
        <p>Espace Havana est un espace dédié a l'Art Nigérian regroupant les œuvres d'un collectif d'artistes
          toutes et tous impliqués dans la transmission d'un message fort.</p>
        <img src="../resources/elephant.jpeg" alt="elephant paint" />
      </div>
      <div className="left between image-container">
        <img src="../resources/2_femmes_main_blue.jpeg" alt="two women paint" />
        <p>La culture est transversale seule compte l'émotion présent.
          Elle présent une série des toiles (huile, acrylique, ...).</p>
      </div>
      <div className="right image-container">
        <p>Exposer à ambares au 8 Chemin de la Hourcade, 33440 Ambarès-et-Lagrave, France</p>
        <img src="../resources/femme_multicolor.jpeg" alt="multicolor woman paint" />
      </div>
      <div className="left image-container">
        <img src="../resources/femme_penche_main_orange_black.jpeg" alt="women orange color" />
      </div>
      <div className="right image-container">
        <img src="../resources/visage_ville_lunette.jpeg" alt="face city glass" />
      </div>
      <div className="left image-container">
        <img src="../resources/walking_african_people.jpeg" alt="walking african peopple" />
      </div>
      <div className="right image-container">
        <img src="../resources/abstract_art_multicolor.jpeg" alt="elephant paint" />
      </div>
      <div className="left image-container">
        <img src="../resources/abstract_art_circle.jpeg" alt="elephant paint" />
      </div>
    </div>
  );
}