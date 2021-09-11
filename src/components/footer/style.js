import styled from "styled-components";

const StyledFooter = styled.footer`
  position: fixed;
  height: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 20px 0 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #52b6ff;
  }
  div {
    position: relative;
    bottom: 25px;
    width: 91px;
    height: 91px;
  }
`;

export { StyledFooter };
