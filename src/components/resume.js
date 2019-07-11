import React, { Component } from "react";
import "../stylesheets/resume.scss";
import { Box } from "rebass";

export default class Resume extends Component {
  constructor(props) {
    super(props);
    this.testOnClick = () => {
      //valid click handler
      console.log("Hello World");
    };
  }
  // testOnClick = () => {//valid click handler
  //   console.log("Testing1");
  // };

  render() {
    return (
      <div className="container" id="resume">
        <div className=" columns header-col">
          <h1>
            <span>EDUCATION</span>
          </h1>
        </div>
        <Box p={5} width={[1, 1, 1]} bg="#D3D3D3">
          <section className="resume">
            <div className="row education">
              <section className="centered education__cards">
                <article className="education__card" onClick={this.testOnClick}>
                  {" "}
                  {/* card 1 start */}{" "}
                  {/* for dead center positioning use "twelve columns" className     */}
                  <div className="">
                    <h3 className="">University of Windsor</h3>
                    <p className="">
                      Bachelor of Computer Science<span>&bull;</span>{" "}
                      <em className="date">May 2020</em>
                    </p>
                    <ul>
                      <li>
                        In-Course scholarship for maintaining GPA over 3.1
                      </li>
                    </ul>
                  </div>
                </article>{" "}
                {/* card 1 end */}
                <article className="education__card">
                  <div className=" ">
                    <h3 className=" ">Team Treehouse</h3>
                    <p className="  ">
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
                </article>
                <article className="education__card">
                  <div className=" ">
                    <h3 className=" ">FreeCodeCamp</h3>
                    <p className="  ">
                      Front End Certification<span>&bull;</span>{" "}
                      <em className="date">August 2017</em>
                    </p>
                    <ul>
                      <li>
                        Built 5 projects using Bootstrap, jQuery, Sass, React,
                        and Redux
                      </li>
                      <li>
                        View official certificate{" "}
                        <a href="https://www.freecodecamp.org/certification/shehanat/legacy-front-end">
                          here
                        </a>
                      </li>
                    </ul>
                  </div>
                </article>
                {/* item end */}
              </section>{" "}
              {/*  main-col end */}
            </div>{" "}
            {/* end education */}
          </section>
        </Box>
      </div>
    );
  }
}
