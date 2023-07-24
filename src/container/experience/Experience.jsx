import React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <div className="kd__experience" id="experience">
      <div className="kd__experience__jobs">
        <h1>
          <span className="heading">02.</span>Where I’ve Worked
        </h1>
        <div className="kd__experience__jobs-1">
          <h2>
            Front-End Developer 
            <a href="https://debugdigital.com/" target="_blank">
            @ Debug Digital
            </a>
          </h2>
          <h3>Sep 2021 - Mar 2023</h3>
          <ul className="skillset">
            <li>React.js</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>Redux</li>
            <li>Figma</li>
            <li>Jest/Enzyme</li>
          </ul>
          <ul>
            <li>
              Developed multiple web-based projects delivered using Agile
              practices in a multi-disciplinary team, mainly using TypeScript,
              React and Redux
            </li>
            <li>
              Worked closely with design team to translate mock-ups and
              wire-frames into fully functional and interactive interfaces
            </li>
            <li>
              Built reusable components and modular code using React to
              facilitate design changes and updates
            </li>
            <li>
              Conducted tests using Jest and Enzyme to identify areas for
              improvement and implemented solutions to ensure efficient and
              smooth running of application
            </li>
            <li>
              Collaborated with designers and back-end developers to ensure that
              the application met the needs of users and provided them with a
              seamless and enjoyable experience
            </li>
            <li>
              I transitioned to part-time status when I returned to university
              for my final year, and then resumed full-time status in July 2022
            </li>
          </ul>
          <div className="kd__experience__jobs-2">
            <h2>
            Front-End Developer 
              <a href="https://debugdigital.com/" target="_blank">
                @ Debug Digital (internship)
              </a>
            </h2>
            <h3>Jun 2021 - Aug 2021</h3>
            <ul className="skillset">
              <li>React.js</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
            </ul>
            <ul>
              <li>
                Worked collaboratively with senior developers to create and
                maintain modern, user-friendly websites using HTML, CSS, and
                JavaScript
              </li>
              <li>
                Contributed to the development of reusable React components to
                enhance the functionality and user experience of the web
                applications
              </li>
              <li>
                Participated in team meetings and brainstorming sessions to
                generate new ideas and approaches to website development
              </li>
              <li>
                Actively engaged in professional development by attending
                training sessions, industry events, and workshops to improve
                skills and stay up-to-date with the latest trends and best
                practices in front-end development
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
