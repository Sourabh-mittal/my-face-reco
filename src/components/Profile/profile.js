import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <article className="br3 ba dark-gray b--black-10 w-100 w-50-m w-25-l mv4 mw6 shadow-5 center">
        <main className="pa4 black-80 ">
          <h1>Profile</h1>
          <div className="mt3 ">
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
// className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
// className="ba b--transparent ph0 mh0"
// className="db fw6 lh-copy f5
