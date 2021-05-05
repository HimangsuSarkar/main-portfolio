import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import himangsu from '../../img/himangsu_with_laptop.jpg';

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
            Passionate web developer. Always try to learn the new features of technology. Last few years made myself skilled in the field of web application development. I am passionate about providing care to my work, which keeps me motivated and excited about doing my best work.My hobby is coding.
        </p>
        </div>

        <div className="job job-1">
          <h3>Skills</h3>
          <p>
            • <strong>Comfortable :</strong> JavaScript, ES6, React, Redux, React Router, HTML, CSS, Bootstrap <br />
          • <strong>Familiar :</strong> PHP,Laravel,Wordpress,TypeScript, Node.js, Express.js, MongoDB, Material-UI, React Bootstrap, React Native,Java,C,C++ <br />
          • <strong>Tools :</strong>Linux,VSCode,Heroku,Netlify,Firebase,PhpStorm,AndroidStudio,Xampp<br />
          • <strong>OS :</strong> Windows
        </p>
        </div>

        <div className="job job-2">
          <h3>Personal Info</h3>
          <p>
            <strong>Name</strong>          :   Himangsu Sarkar <br />
            <strong>DoB</strong>           :   1st Aug 1997 <br />
            <strong>Nationality</strong>   :   Bangladeshi <br />
            <strong>Blood Group</strong>   :   O+<br />
            <strong>Religion</strong>      :   Hindu <br />
            <strong>NID</strong>           :   <br />
          </p>
        </div>

        <div className="job job-3">
          <h3>Education</h3>
          <p>
            <strong>Bachelor of computer science</strong><br />
            <strong>Institute:</strong>   Changzhou institute of technology  <br />
            <strong>Subject:</strong>      Computer science and information technology
          </p>
        </div>
      </div>
      <div className="cv">
        <Link target="_blank" to="https://drive.google.com/file/d/1l7Jy0-OJiW3V4G5bDjXby1wzOjmKcNuQ/view?usp=sharing" className="glow-on-hover">Download Resume</Link>
      </div>
    </main>
  );
};

export default About;
