import React from "react";
import "./work.css";
import solitaire from "../../assets/soliatire.jpg";
import { BsGithub } from "react-icons/bs";

const Work = () => {
  return (
    <div className="kd__work" id="work">
      <h1>
        <span>03.</span>Some Things I've Built
      </h1>
      <div className="kd__work-projects">
        <div className="kd__work-project1">
          <h2>Solitaire</h2>
          <h3>Featured project</h3>
          <p>
            Welcome to Solitaire, a classic card game played all around the
            world. This version of Solitaire is played with a single deck of
            cards and is a single-player game. this was written using{" "}
            <span>React </span>
            and <span>Javscript</span> and styled with <span>CSS</span>.
          </p>
          <a
            href="https://github.com/kdarwish00/solitaire-game"
            target="_blank"
          >
            <BsGithub color="#8892b0" size={29} className="github"/>
          </a>
        </div>
        <div className="kd__work-project2">
          <h2>Simple Calculator</h2>
          <h3>Featured project</h3>

          <p>
            This project is a simple calculator app that allows users to perform
            basic arithmetic operations such as addition, subtraction,
            multiplication, and division. It was built using the{" "}
            <span>React</span> and <span>JavaScript</span> library and follows a
            functional programming style.
          </p>
          <a href="https://github.com/kdarwish00/calc-react.js" target="_blank">
            <BsGithub color="#8892b0" size={29} className="github"/>
          </a>
        </div>
        <div className="kd__work-project3">
          <h2>Income Tax Calculator</h2>
          <h3>Featured project</h3>

          <p>
            This is a simple income tax calculator for UK residents. It
            calculates the income tax and national insurance contributions based
            on the income entered by the user.
          </p>
          <a
            href="https://github.com/kdarwish00/gallagher-project"
            target="_blank"
          >
            <BsGithub color="#8892b0" size={29} className="github"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
