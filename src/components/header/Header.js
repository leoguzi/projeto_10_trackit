import { useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../contexts/userContext";
import { StyledHeader } from "./style";

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
