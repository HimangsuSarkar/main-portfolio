import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import jsImg from '../../img/blog/javascript-with-laptop-code.jpg';
import reactImg from '../../img/blog/react.png';
import dataStructureImg from '../../img/blog/javascript-with-laptop-code.jpg';

const Blog = () => {
  
  return (
    <main id="blog">
    <h1 className="lg-heading">
      Blog <span className="secondary-color">Post</span>
    </h1>
        <div className="card-deck mt-4">
            <div className="card bg-dark">
              <img src={jsImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">Important Topics of Javascript</h5>
                <p className="card-text">
                    Synchronous/Asynchronous: In programming, synchronous operations block instructions until the task is completed...
                </p>
              </div>
              <div className="card-footer">
                <Link target="_blank" to="https://medium.com/swlh/important-topics-of-javascript-272f3be977dc" className="btn btn-primary text-light">Read More</Link>
              </div>
            </div>
            <div className="card bg-dark">
              <img src={reactImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">Getting Started With React </h5>
                <p className="card-text">
                    What is React: React is a Javascript library, not a framework. It can not provide a complete solution. To form any...
                </p>
              </div>
              <div className="card-footer">
                <Link target="_blank" to="https://medium.com/@shrikantamazumder/getting-started-with-react-and-how-it-works-3fc73180bd1b" className="btn btn-primary text-light">Read More</Link>
              </div>
            </div>
            <div className="card bg-dark">
              <img src={dataStructureImg} className="card-img-top" alt="Blog Img" />
              <div className="card-body">
                <h5 className="card-title">5 Important Data Structures in Javascript</h5>
                <p className="card-text">
                    Data structures, particular way or techniques to storing and organizing data. That makes it easier to access,...
                </p>
              </div>
              <div className="card-footer">
                <Link target="_blank" to="https://medium.com/@shrikantamazumder/5-important-data-structures-in-javascript-aa9c9c27456a" className="btn btn-primary text-light">Read More</Link>
              </div>
            </div>

    </div>
  </main>
  );
}

export default Blog;