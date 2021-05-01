import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import nomination from '../../img/projects/nomination-team.png';
import taxiCap from '../../img/projects/taxiCap.png';
import onlineTutor from '../../img/projects/onlineTutor.png';



const Work = () => {
  return (
    <main id="work">
      <h1 className="lg-heading">
        My <span className="secondary-color">Work</span>
      </h1>
      <h2 className="sm-heading">
        Check out some of my projects...
    </h2>
      <div className="projects">
        <div className="item">
          <a target="" href="https://pensive-brattain-9c0ae5.netlify.app/">
            <img src={nomination} alt="Project" />
          </a>
          <a target="" href="https://pensive-brattain-9c0ae5.netlify.app/" className="btn-light">
            <FontAwesomeIcon icon={faEye} /> Project
        </a>
          <a target="" href="https://github.com/HimangsuSarkar/nominate-team" className="btn-dark">
            <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        </div>
        <div className="item">
          <a target="" href="https://brave-jepsen-9d2a6a.netlify.app/">
            <img src={taxiCap} alt="Project" />
          </a>
          <a target="" href="https://brave-jepsen-9d2a6a.netlify.app/" className="btn-light">
            <FontAwesomeIcon icon={faEye} /> Project
        </a>
          <a target="" href="https://github.com/HimangsuSarkar/TaxiCap-rider" className="btn-dark">
            <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        </div>
        <div className="item">
          <a target="" href="#!">
            <img src={onlineTutor} alt="Project" />
          </a>
          <a target="" href="https://607be511e25202c6aad09def--frosty-spence-98998b.netlify.app/" className="btn-light">
            <FontAwesomeIcon icon={faEye} /> Project
        </a>
          <a target="" href="https://github.com/HimangsuSarkar/online-tutor" className="btn-dark">
            <FontAwesomeIcon icon={faGithub} /> Github
        </a>
        </div>

      </div>
    </main>
  );
}

export default Work;
