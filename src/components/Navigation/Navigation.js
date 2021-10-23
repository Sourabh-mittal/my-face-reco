import React from "react";
import Button from "../Button.component";
const Navigation = ({ onRouteChange, isSignedIn, inProfile, inAbout }) => {
  if (isSignedIn === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onRouteChange={onRouteChange} route={"profile"}>
          Profile
        </Button>
        <Button onRouteChange={onRouteChange} route={"Signout"}>
          Sign Out
        </Button>
        <Button onRouteChange={onRouteChange} route={"about"}>
          About
        </Button>
      </nav>
    );
  } else if (inProfile === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onRouteChange={onRouteChange} route={"home"}>
          Home
        </Button>
        <Button onRouteChange={onRouteChange} route={"Signout"}>
          Sign Out
        </Button>
        <Button onRouteChange={onRouteChange} route={"about"}>
          About
        </Button>
      </nav>
    );
  } else if (inAbout === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onRouteChange={onRouteChange} route={"profile"}>
          Profile
        </Button>
        <Button onRouteChange={onRouteChange} route={"home"}>
          Home
        </Button>
        <Button onRouteChange={onRouteChange} route={"Signout"}>
          Sign Out
        </Button>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onRouteChange={onRouteChange} route={"Signin"}>
          Sign In
        </Button>
        <Button onRouteChange={onRouteChange} route={"Register"}>
          Register
        </Button>
      </nav>
    );
  }
};

export default Navigation;
