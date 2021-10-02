import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn === true) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <h3
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("Signout")}
        >
          Sign Out
        </h3>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <h3
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("Signin")}
        >
          Sign In
        </h3>
        <h3
          className="f3 link dim black underline pa3 pointer"
          onClick={() => onRouteChange("Register")}
        >
          Register
        </h3>
      </nav>
    );
  }
};

export default Navigation;
