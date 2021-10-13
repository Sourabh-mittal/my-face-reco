import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <main>
          <h1>PROFILE</h1>
          <div>
            <h3>Name : {this.props.user_info.name} </h3>
            <h3>Email : {this.props.user_info.email} </h3>
            <h3>Entries : {this.props.user_info.entries} </h3>
            <h3>Joined On : {this.props.user_info.joined} </h3>
          </div>
        </main>
      </article>
    );
  }
}

export default Profile;
