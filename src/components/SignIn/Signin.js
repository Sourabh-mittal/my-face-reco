import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
      emailError: "",
      passwordError: "",
    };
  }

  onEmailChange = (event) => {
    const { value } = event.target;
    if (value) {
      this.setState({ signInEmail: value, emailError: "" });
    } else if (!value) {
      this.setState({ emailError: "email is required" });
    }
  };

  onPasswordChange = (event) => {
    const { value } = event.target;
    if (value) {
      this.setState({ signInPassword: value, passwordError: "" });
    } else if (!value) {
      this.setState({ passwordError: "password is required" });
    }
  };

  validator = () => {
    const { signInEmail, signInPassword } = this.state;
    let emailError = "";
    let passwordError = "";

    if (!signInEmail) {
      emailError = "email is required";
    }

    if (!signInPassword) {
      passwordError = "password is required";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  };

  onSubmitSignIn = () => {
    const isValid = this.validator();
    if (isValid) {
      fetch("https://my-face-reco-api.herokuapp.com/signin", {
        method: "post",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          email: this.state.signInEmail,
          password: this.state.signInPassword,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user.id) {
            this.props.loadUser(user);
            this.props.onRouteChange("home");
          }
        });
    }
  };

  onEnterPush = (e) => {
    if (e.charCode === 13) {
      this.onSubmitSignIn();
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
              <legend className="f2 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  onClick={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  required
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
                  onChange={this.onPasswordChange}
                  onClick={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>
              <div style={{ color: "red", fontsize: 12 }}>
                {" "}
                {this.state.passwordError}{" "}
              </div>
            </fieldset>
            <div>
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f5 dib"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
