import styled from "styled-components";

const StyledHeader = styled.header`
  font-family: "Playball", cursive;
  height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #126ba5;

  h1 {
    margin-left: 15px;
    font-size: 40px;
    color: #ffffff;
  }
  img {
    margin-right: 15px;
    width: 51px;
    height: 51px;
    border-radius: 25px;
  }
`;

export { StyledHeader };
