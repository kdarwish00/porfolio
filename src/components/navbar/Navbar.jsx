import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="kd__navbar">
      <div className="kd__navbar-links">
        <div className="kd__navbar-links_container">
          <p>
            <a href="#about">
              <span>01.</span>About
            </a>
          </p>
          <p>
            <a href="#experience">
              <span>02.</span>Experience
            </a>
          </p>
          <p>
            <a href="#work">
              <span>03.</span>Work
            </a>
          </p>
          <p>
            <a href="#contact">
              <span>04.</span>Contact
            </a>
          </p>
        </div>
      </div>
      <div className="kd__navbar-resume">
        <a href="#" className="btn">
          Resume
        </a>
      </div>
      <div className="kd__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#64FFDA"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#64FFDA"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="kd__navbar-menu_container scale-up-center">
            <div className="kd__navbar-menu_container-links">
              <p>
                <a href="#about">
                  <span>01.</span>About
                </a>
              </p>
              <p>
                <a href="#experience">
                  <span>02.</span>Experience
                </a>
              </p>
              <p>
                <a href="#work">
                  <span>03.</span>Work
                </a>
              </p>
              <p>
                <a href="#contact">
                  <span>04.</span>Contact
                </a>
              </p>
            </div>
            <div className="kd__navbar-menu_container-links-resume">
              <a href="#" className="btn">
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
