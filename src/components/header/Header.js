import { useContext } from "react";
import UserContext from "../../contexts/userContext";
import { StyledHeader } from "./style";
export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <StyledHeader>
      <h1>Trackit</h1>
      <img src={user.image} alt={user.name} />
    </StyledHeader>
  );
}
