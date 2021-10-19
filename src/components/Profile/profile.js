import React from "react";

const initialState = {
  name: "",
  email: "",
  entries: "",
  joined: "",
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    const { name, email, entries, joined } = this.state;
    fetch(
      `https://my-face-reco-api.herokuapp.com/profile/${this.props.user_id}`,
      {
        method: "get",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          email: data.email,
          entries: data.entries,
          joined: data.joined,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <article className="white">
        <main>
          <h1>PROFILE</h1>
          <div>
            <h3>Name : {this.state.name} </h3>
            <h3>Email : {this.state.email} </h3>
            <h3>Entries : {this.state.entries} </h3>
            <h3>Joined On : {this.state.joined.slice(0, 10)} </h3>
          </div>
        </main>
      </article>
    );
  }
}

export default Profile;
