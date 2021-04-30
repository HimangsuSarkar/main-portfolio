import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import himangsu from '../../img/shrikanta-mazumder.jpg';

const About = () => {
  return (
    <main id="about">
      <h1 className="lg-heading">
        About <span className="secondary-color">Me</span>
      </h1>
      <h2 className="sm-heading">
        Let me introduce...
      </h2>
      <div className="about-info">
        <img src={himangsu} alt="John Doe" className="bio-image" />

        <div className="bio">
          <p>
            Passionate web app developer. Always try to grab the new features of technology. Last few years made myself skilled in the field of web application development. Acquired to maintain strong interpersonal relationships with teammates. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work
        </p>
        </div>

        <div className="job job-1">
          <h3>Skills</h3>
          <p>
            • <strong>Programming :</strong> Javascript, ES6, React, Redux, PHP, Laravel <br />
          • <strong>Databases :</strong> MongoDB, Firebase, MySQL <br />
          • <strong>Tools :</strong> Git, Webpack, VSCode, Chrome Dev Tool<br />
          • <strong>OS :</strong> Windows, Linux
        </p>
        </div>

        <div className="job job-2">
          <h3>Personal Info</h3>
          <p>
            <strong>Name</strong>          :   Shrikanta Mazumder <br />
            <strong>DoB</strong>           :   1st Jan 1997 <br />
            <strong>Nationality</strong>   :   Bangladeshi <br />
            <strong>Blood Group</strong>   :   A+<br />
            <strong>Religion</strong>      :   Sanatan <br />
            <strong>NID</strong>           :   1461463893<br />
          </p>
        </div>

        <div className="job job-3">
          <h3>Education</h3>
          <p>
            <strong>Bachelor of Arts (Honours)</strong><br />
            <strong>Institute:</strong>   National University <br />
            <strong>Subject:</strong>     English Literature
        </p>
        </div>
      </div>
      <div className="cv">
        <Link target="_blank" to="https://drive.google.com/uc?export=download&id=1NkoFLWyDX_P25-_FtodtHyLG_ClUTqFP" className="glow-on-hover">Download CV</Link>
      </div>
    </main>
  );
};

export default About;
