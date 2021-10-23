import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 20%);
  padding: auto;
  width: 60%;
  margin: 2rem auto;

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    height: 40px;
    width: 40px;
  }
`;
