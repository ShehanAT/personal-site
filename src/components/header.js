import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav id="nav-wrap" className="opaque">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="banner row">
          <div className="banner-text">
            <h1 className="responsive-headline">Hey, I'm Shehan</h1>
            <h3 className="responsive-headline-text">
              {/* span is a inline element, inline elements do not start on new lines, block elements start on new lines */}
              I'm a Windsor based <span> web developer </span> creating awesome
              and usefull web applications for others.{" "}
            </h3>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <FontAwesomeIcon icon={faArrowCircleDown} />
          </a>
        </p>
      </header>
    );
  }
}
