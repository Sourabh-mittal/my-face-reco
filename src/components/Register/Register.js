import React from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: "",
};

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onNameChange = (event) => {
    const { value } = event.target;
    if (value) {
      this.setState({ name: value, nameError: "" });
    } else if (!value) {
      this.setState({ nameError: "name is required" });
    }
  };

  onEmailChange = (event) => {
    const { value } = event.target;
    if (value && value.includes("@")) {
      this.setState({ email: value, emailError: "" });
    } else if (!value) {
      this.setState({ emailError: "email is required" });
    } else if (!value.includes("@")) {
      this.setState({ emailError: "email is invalid" });
    }
  };

  onPasswordChange = (event) => {
    const { value } = event.target;
    if (value && value.length >= 6) {
      this.setState({ password: value, passwordError: "" });
    } else if (!value) {
      this.setState({ passwordError: "password is required" });
    } else if (value.length < 6) {
      this.setState({ passwordError: "password must be 6 character long" });
    }
  };

  validator = () => {
    const { email, password, name } = this.state;
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!name) {
      nameError = "name is required";
    }

    if (!email) {
      emailError = "email is required";
    } else if (!email.includes("@")) {
      emailError = "invalid email";
    }

    if (!password) {
      passwordError = "password is required";
    } else if (password.length < 6) {
      passwordError = "password must be 6 characters long";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  onSubmitRegister = () => {
    const isValid = this.validator();
    const { email, password, name } = this.state;
    if (isValid) {
      fetch("https://my-face-reco-api.herokuapp.com/register", {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange("home");
          }
        });
      this.setState(initialState);
    }
  };

  onEnterPush = (e) => {
    if (e.charCode === 13) {
      this.onSubmitRegister();
    }
  };

  render() {
    const { onRouteChange } = this.props;
    return (
      <article
        onKeyPress={this.onEnterPush}
        className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
      >
        <main className="pa4 black-80 ">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f2 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                  onClick={this.onNameChange}
                />
              </div>
              <div style={{ color: "red", fontsize: 12 }}>
                {" "}
                {this.state.nameError}{" "}
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                  onClick={this.onEmailChange}
                />
              </div>
              <div style={{ color: "red", fontsize: 12 }}>
                {" "}
                {this.state.emailError}{" "}
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                  onClick={this.onPasswordChange}
                />
              </div>
              <div style={{ color: "red", fontsize: 12 }}>
                {" "}
                {this.state.passwordError}{" "}
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitRegister}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib pointer"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
