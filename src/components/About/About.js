import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 w-100 w-50-m w-25-l mv4 mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <h1>About</h1>
          <div className="mt3 ">
            <h2>Made By Sourabh Mittal.</h2>
            <h2>Visit Github Repo</h2>
          </div>
        </main>
      </article>
    );
  }
}

export default About;
