import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/userContext";
import styled from "styled-components";

export default function Header() {
  const history = useHistory();
  const { user } = useContext(UserContext);
  if (user) {
    return (
      <StyledHeader>
        <h1>Trackit</h1>
        <img src={user.image} alt={user.name} />
      </StyledHeader>
    );
  } else {
    history.push("/");
    return <span>Você não está logado</span>;
  }
}

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
