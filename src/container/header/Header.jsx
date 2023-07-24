import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="kd__header section__padding">
      <div className="kd__header-content">
        <div className="smaller__text">
          <h2>Hi, my name is</h2>
        </div>
        <div className="bigger__text">
          <h1>
            <span className="effect">K</span>
            <span className="effect">h</span>
            <span className="effect">a</span>
            <span className="effect">l</span>
            <span className="effect">e</span>
            <span className="effect">d </span>
            <span className="effect">D</span>
            <span className="effect">a</span>
            <span className="effect">r</span>
            <span className="effect">w</span>
            <span className="effect">i</span>
            <span className="effect">s</span>
            <span className="effect">h</span>
            <span className="effect">.</span> <br></br>
            <span className="subheading">I build things for the web</span>
          </h1>
        </div>
        <div className="kd__header-content__about-section">
          <p>
            I'm a self-taught <span>Front-end Developer</span> specialsing in
            building and designing exceptional digital experiences. My love for
            exploring new technologies and creating fast, interactive user
            interfaces is matched by my ability to analyse complex problems and
            find creative solutions, honed by my mathematical background.
          </p>
        </div>
      </div>
      <div className="kd__header-globe"></div>
    </div>
  );
};

export default Header;
