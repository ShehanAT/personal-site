import React, { Component } from "react";
import "../stylesheets/contact.scss";
import { Box, Text } from "rebass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SocialIcon } from "react-social-icons";
export default class Contact extends Component {
  render() {
    return (
      <div className="container" id="contact">
        <div className=" columns header-col">
          <h1>
            <span>CONTACT</span>
          </h1>
        </div>
        <Box p={5} width={[1, 1, 1]} bg="#D3D3D3">
          <section>
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              color="black"
              textAlign="left"
              pb={3}
            >
              <SocialIcon url="shehanatuk@gmail.com" />
              <a href="mailto:shehanatuk@gmail.com"> shehanatuk@gmail.com</a>
            </Text>
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              color="black"
              textAlign="left"
              pb={3}
            >
              <SocialIcon url="https://github.com/ShehanAT" />
              <a href="https://github.com/ShehanAT">
                {" "}
                https://github.com/ShehanAT
              </a>
            </Text>
            <Text
              fontSize={[3, 4, 5]}
              fontWeight="bold"
              color="black"
              textAlign="left"
              pb={3}
            >
              <SocialIcon url="https://www.linkedin.com/in/shehan-a-780622126/" />
              <a href="https://www.linkedin.com/in/shehan-a-780622126/">
                {" "}
                https://www.linkedin.com/in/shehan-a-780622126/
              </a>
            </Text>
          </section>
        </Box>
      </div>
    );
  }
}
