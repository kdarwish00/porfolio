import React, { useState } from "react";
import "./about.css";
import face from "../../assets/face.jpg";
import tint from "../../assets/tint.jpg";

const About = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="kd__about" id="about">
      <div className="kd__about-content">
        <div className="kd__about-content__heading">
          <h1>
            <span>01.</span>About Me
          </h1>
        </div>
        <div className="kd-about-content__story">
          <p>
            Hello, my name is Khaled, and I am enthusiastic about creating
            digital content on the internet. I discovered my passion for web
            development in 2021, during the COVID-19 pandemic when I decided to
            learn coding. It's amazing to think that a simple Google search for
            'best jobs for coders' has led me this far on my journey.
          </p>
          <p>
            Looking back, I feel grateful for the opportunity to work for{" "}
            <a href="https://debugdigital.com/" target="_blank">
              <span>Debug Digital</span>
            </a>
            , a small web boutique company that provided me with my initial
            foray into web development. This experience has been instrumental in
            propelling me forward on my journey, and I am thankful for it. Given
            my background in Mathematics and Finance, I am particularly
            interested in pursuing opportunities within the financial sector.
            However, I am open to exploring any opportunities that might come my
            way. I am eager to utilise my skills and expertise to contribute to
            this industry through my work in web development. My goal is to find
            a position that allows me to{" "}
            <span>
              combine my passion for web development with my knowledge of
              finance
            </span>
            , in order to make meaningful contributions to the field.
          </p>
          <p>
            Here are a few technologies I've been working with recently:
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
              <li>WordPress/Figma</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="kd__about__picture">
        <img
          alt="ME!"
          src={isHovering ? face : tint}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        />
      </div>
    </div>
  );
};

export default About;
