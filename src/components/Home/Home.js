import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Typical from 'react-typical';

const Home = () => {
  return (
    <main id="home">
      <h1 className="lg-heading">
        Himangsu
        <span className="secondary-color"> Sarkar</span>
      </h1>
      <h2 className="sm-heading">
        Hi, I am {' '}
        <Typical
          steps={[
            'A Web Developer', 2000,
            'A Programmer', 2000,
            'A Software Engineer', 2000,
          ]}
          loop={Infinity}
          wrapper="span"
        />
      </h2>
      <div className="icons">
        {/* <a target="_blank" href="">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a> */}
        <a target="_blank" href="https://www.facebook.com/himangsusarkar.himu.7">
          <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/himangsusarkar/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a target="_blank" href="https://github.com/HimangsuSarkar">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </main >
  );
}

export default Home;
