import React from "react";
import { StyledButton } from "./styles/StyledButton";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onRouteChange, route } = this.props;
    return (
      <StyledButton onClick={() => onRouteChange(route)}>
        {" "}
        {this.props.children}{" "}
      </StyledButton>
    );
  }
}

export default Button;
