import React from 'react';
import { FaHeart, FaGithub } from "react-icons/fa";
import './About.scss';

const About = (props) => (
  <div className="About">
    <div className="Box">
      <p>React.JS + Redux App</p>
      {/* <br /> */}
      <p>Made with <span><FaHeart /></span> by:</p>
      {/* <br /> */}
      <p><strong>Alon Alush</strong></p>
      {/* <br /> */}
      <p>
      <span>Project Source code =></span>
        <a href="https://github.com/alonzo245/youflix" target="_blank">
          <FaGithub />
        </a>
      </p>
    </div>
  </div>
);

export default About;