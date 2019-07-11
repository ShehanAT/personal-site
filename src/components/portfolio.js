import React, { Component } from "react";
import "../stylesheets/portfolio.scss";
import { Box } from "rebass";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="container" id="project">
        <div className=" columns header-col">
          <h1>
            <span>PROJECTS</span>
          </h1>
        </div>
        <Box p={5} width={[1, 1, 1]} bg="#D3D3D3">
          <section className="portfolio">
            <section className="centered project__cards">
              <a href="http://159.89.116.234:8080/" className="project__card">
                <article>
                  <img
                    src={require("../../public/images/reactImageGallery.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>React Image Gallery</h3>
                    <p>
                      Image Gallery built using React and the Flickr API. Allows
                      user to send search queries to Flickr and displays image
                      results.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">React</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Axios</div>
                  </div>
                </article>
              </a>
              <a
                href="https://fathomless-refuge-88305.herokuapp.com/"
                className="project__card"
              >
                <article>
                  <img
                    src={require("../../public/images/ocrCapstone.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>OCR with Flickr</h3>
                    <p>
                      Communicates with Flickr API and Microsoft Computer Vision
                      API to allow the user to search images on Flickr then
                      extract any potential words contained inside.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">Angular&amp;Node.js</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Passport&amp;OAuth</div>
                    <div className="tag">MongoDB</div>
                  </div>
                </article>
              </a>
              <a
                href="https://fathomless-refuge-88305.herokuapp.com/"
                className="project__card"
              >
                <article>
                  <img
                    src={require("../../public/images/ocrCapstone.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>Twitter Project</h3>
                    <p>
                      Communicates with Flickr API and Microsoft Computer Vision
                      API to allow the user to search images on Flickr then
                      extract any potential words contained inside.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">Angular&amp;Node.js</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Passport&amp;OAuth</div>
                    <div className="tag">MongoDB</div>
                  </div>
                </article>
              </a>
              <a
                href="https://fathomless-refuge-88305.herokuapp.com/"
                className="project__card"
              >
                <article>
                  <img
                    src={require("../../public/images/ocrCapstone.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>Twitter Project</h3>
                    <p>
                      Communicates with Flickr API and Microsoft Computer Vision
                      API to allow the user to search images on Flickr then
                      extract any potential words contained inside.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">Angular&amp;Node.js</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Passport&amp;OAuth</div>
                    <div className="tag">MongoDB</div>
                  </div>
                </article>
              </a>
              <a
                href="https://fathomless-refuge-88305.herokuapp.com/"
                className="project__card"
              >
                <article>
                  <img
                    src={require("../../public/images/ocrCapstone.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>Twitter Project</h3>
                    <p>
                      Communicates with Flickr API and Microsoft Computer Vision
                      API to allow the user to search images on Flickr then
                      extract any potential words contained inside.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">Angular&amp;Node.js</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Passport&amp;OAuth</div>
                    <div className="tag">MongoDB</div>
                  </div>
                </article>
              </a>
              <a
                href="https://fathomless-refuge-88305.herokuapp.com/"
                className="project__card"
              >
                <article>
                  <img
                    src={require("../../public/images/ocrCapstone.png")}
                    alt="thumbnail"
                    className="project__card--img"
                  />
                  <div className="">
                    <h3>Twitter Project</h3>
                    <p>
                      Communicates with Flickr API and Microsoft Computer Vision
                      API to allow the user to search images on Flickr then
                      extract any potential words contained inside.
                    </p>
                  </div>
                  <div className="tags">
                    <div className="tag">Angular&amp;Node.js</div>
                    <div className="tag">HTML&amp;CSS</div>
                    <div className="tag">Passport&amp;OAuth</div>
                    <div className="tag">MongoDB</div>
                  </div>
                </article>
              </a>
            </section>
          </section>
        </Box>
      </div>
    );
  }
}
