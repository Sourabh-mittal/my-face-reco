import styled from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #333;
  border-radius: 5em;
  background: linear-gradient(89deg, #ff5edf 0%, #04c8de 100%);
  font-size: 20px;
  margin: 10px;
  padding: 10px;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
