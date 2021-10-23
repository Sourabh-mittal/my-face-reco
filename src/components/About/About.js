import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { StyledDiv } from "../styles/StyledDiv";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <StyledDiv>
        <div>
          <h1>ABOUT</h1>
          <h2>Github Repository</h2>
          <a
            href="https://github.com/Sourabh-mittal/my-face-reco"
            target="_blank"
          >
            <FaGithub />
          </a>
          <h2>Made by Sourabh Mittal. Visit Profile</h2>
          <a
            href="https://www.linkedin.com/in/sourabh-mittal-589798212/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </StyledDiv>
    );
  }
}

export default About;
