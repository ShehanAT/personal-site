import React, { Component } from "react";
import logo from "../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default class About extends Component {
  render() {
    return (
      <section className="about" id="about">
        <div className="row">
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {" "}
              Hello, I'm Shehan. I started learning about web development in
              2016 and ever since then I have fallen in love with it. I
              Specialize in React.js, Node.js and Angular.js . I am currently in
              finishing my last year at the University of Windsor Computer
              Science program and am very well versed in computer science
              fundamentals. Over the last few years I have completed the Front
              End Certification offered by FreeCodeCamp and the FullStack
              Javascript Techdegree program offered by Treehouse, both of which
              provided me with invaluable experience in the field of web
              developement. I am constantly learning about new advances and
              technologies in web developement and make numerous personal
              projects incorporating newly learned skills/technologies in order
              to gain invaluable hands-on experience, which I believe is the
              best way to learn.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Shehan Atuk</span>
                  <br />
                  <span>Windsor, Ontario, Canada</span>
                  <br />
                  <span>226-260-8289</span>
                  <br />
                  <span>shehanatuk@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button">
                    <FontAwesomeIcon icon={faFileDownload} />
                    Download My Resume
                  </a>
                </p>
              </div>
            </div>
            {/*  */}
          </div>
          <div className="three columns ">
            <img className="profile-pic" src={logo} alt="" />
          </div>
        </div>
      </section>
    );
  }
}
