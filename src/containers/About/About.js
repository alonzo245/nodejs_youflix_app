import React from 'react';
import { FaHeart, FaGithub } from "react-icons/fa";
import './About.scss';

const About = (props) => (
  <div className="About">
    <div className="Box">
      <p>React.JS + Redux App</p>
      <p>Made with <span><FaHeart /></span> by:</p>
      <p><strong>Alon Alush</strong></p>
      <p>
      <span>Project Source code =></span>
        <a href="https://github.com/alonzo245/youflix">
          <FaGithub />
        </a>
      </p>
    </div>
  </div>
);

export default About;