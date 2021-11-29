import { useContext } from 'react';
import styled from 'styled-components';
import UserContext from '../contexts/userContext';
import { colors } from '../globalStyles';

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <StyledHeader>
      <h1>Trackit</h1>
      <img src={user?.image} alt={user?.name} />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  font-family: 'Playball', cursive;
  height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${colors.color3};

  h1 {
    margin-left: 15px;
    font-size: 40px;
    color: ${colors.color4};
  }
  img {
    margin-right: 15px;
    width: 51px;
    height: 51px;
    border-radius: 25px;
  }
`;
