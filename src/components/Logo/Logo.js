import React, { Component } from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import face from "./face.png";

class Logo extends React.Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2"
          options={{ max: 55 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner pa3">
            {" "}
            <img style={{ paddingTop: "5px" }} src={face} alt="Logo" />{" "}
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
