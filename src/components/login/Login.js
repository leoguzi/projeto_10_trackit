import { useHistory } from "react-router-dom";
import { LoginContainer } from "./style";
import UserContext from "../../contexts/userContext";
import { useContext, useState } from "react";
import { login } from "../../api";
import logoImg from "../../assets/logo.png";
import { loader, isValidEmail } from "../../utils";
import {
  Logo,
  FormField,
  FormButton,
  StandardLink,
} from "../../styles/standardStyles";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [buttonContent, setButtonContent] = useState("Entrar");
  const [disabled, setDisabled] = useState(false);
  function handleFailedLogin() {
    alert("Verifique os dados de login!");
    setDisabled(false);
    setButtonContent("Entrar");
  }
  function handleLoginForm(e) {
    e.preventDefault();
    setDisabled(true);
    setButtonContent(loader);
    if (isValidEmail(email) && password) {
      login({ email: email, password: password })
        .then((r) => redirect(r.data))
        .catch(handleFailedLogin);
    } else {
      handleFailedLogin();
    }
  }
  function redirect(userData) {
    setUser(userData);
    history.push("/hoje");
  }
  return (
    <LoginContainer onSubmit={handleLoginForm}>
      <Logo src={logoImg} />
      <FormField
        disabled={disabled}
        value={email}
        required
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        disabled={disabled}
        value={password}
        required
        type="password"
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormButton disabled={disabled} type="submit">
        {buttonContent}
      </FormButton>
      <StandardLink onClick={() => history.push("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </StandardLink>
    </LoginContainer>
  );
}
