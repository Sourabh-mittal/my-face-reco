import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article>
        <main>
          <h1>ABOUT</h1>
          <div>
            <h2>Made By Sourabh Mittal</h2>
            <h2>
              Visit{" "}
              <a href="https://github.com/Sourabh-mittal/my-face-reco">
                GitHub Repo
              </a>{" "}
            </h2>
          </div>
        </main>
      </article>
    );
  }
}

export default About;
