import React from 'react';
import './Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import emaJohn from '../../img/projects/ema-john-simple-shrikanta-mazumder.jpg';
import reactTodo from '../../img/projects/react-todo-shrikanta-mazumder.jpg';
import redOnion from '../../img/projects/red-onion-shrikannta-mazumder.jpg';
import doctorsPortal from '../../img/projects/doctors-portal-shrikanta-mazumder.jpg';
import laravelBlog from '../../img/projects/laravel-blog-shrikanta-mazumder.jpg';
import laravelBlogAdmin from '../../img/projects/laravel-blog-admin-shrikanta-mazumder.jpg';


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
        <a target="_blank" href="https://ema-john-simple-f27ee.web.app/">
          <img src={emaJohn} alt="Project" />
        </a>
        <a target="_blank" href="https://ema-john-simple-f27ee.web.app/" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/ema-john-simple.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="item">
        <a target="_blank" href="https://goofy-saha-d74fc6.netlify.app/">
          <img src={reactTodo} alt="Project" />
        </a>
        <a target="_blank" href="https://goofy-saha-d74fc6.netlify.app/" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/react-todo-app.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="item">
        <a target="_blank" href="#!">
          <img src={redOnion} alt="Project" />
        </a>
        <a target="_blank" href="https://red-onion-restaurent.firebaseapp.com/" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/red-onion-restaurent.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="item">
        <a target="_blank" href="https://youthful-mcnulty-317c18.netlify.com/">
          <img src={doctorsPortal} alt="Project" />
        </a>
        <a target="_blank" href="https://youthful-mcnulty-317c18.netlify.com/" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/doctors-portal.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="item">
        <a target="_blank" href="#!">
          <img src={laravelBlog} alt="Project" />
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/laravel-blog.git" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/laravel-blog.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="item">
        <a target="_blank" href="#!">
          <img src={laravelBlogAdmin} alt="Project" />
        </a>
        <a target="_blank" href="https://github.com/ShrikantaMazumder/laravel-blog.git" className="btn-light">
          <FontAwesomeIcon icon={faEye} /> Project
        </a>
        <a target="_blank" to="https://github.com/ShrikantaMazumder/laravel-blog.git" className="btn-dark">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
    </div>
  </main>
  );
}

export default Work;