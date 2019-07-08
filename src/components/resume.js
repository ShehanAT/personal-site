import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section className="resume">
        <div className="row education">
          <div className="twelve columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>
          <div className="twelve columns main-col">
            <div className="row item">
              {/* for dead center positioning use "twelve columns" className     */}
              <div className="twelve columns">
                <h3 className="thirteen columns">University of Windsor</h3>
                <p className="info thirteen columns">
                  Bachelor of Computer Science<span>&bull;</span>{" "}
                  <em className="date">May 2020</em>
                </p>
                <ul>
                  <li>In-Course scholarship for maintaining GPA over 3.1</li>
                </ul>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3 className="thirteen columns">Team Treehouse</h3>
                <p className="info thirteen columns">
                  FullStack Javascript Techdegree<span>&bull;</span>{" "}
                  <em className="date">June 2019</em>
                </p>
                <ul>
                  <li>
                    Built 12 real-world projects using Javascript, Node.js,
                    React, Express, MongoDB and SQL
                  </li>
                  <li>
                    Completed 247 hours of coursework, consisting of code
                    challenges and quizes
                  </li>
                  <li>
                    View official certificate{" "}
                    <a href="https://www.credential.net/667byw7n">here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3 className="thirteen columns">FreeCodeCamp</h3>
                <p className="info thirteen columns">
                  Front End Certification<span>&bull;</span>{" "}
                  <em className="date">August 2017</em>
                </p>
                <ul>
                  <li>
                    Built 5 projects using Bootstrap, jQuery, Sass, React, and
                    Redux
                  </li>
                  <li>
                    View official certificate{" "}
                    <a href="https://www.freecodecamp.org/certification/shehanat/legacy-front-end">
                      here
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* item end */}
          </div>{" "}
          {/*  main-col end */}
        </div>{" "}
        {/* end education */}
      </section>
    );
  }
}
