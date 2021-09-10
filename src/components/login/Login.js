import { useHistory } from "react-router-dom";
import { LoginContainer } from "./style";
import {
  Logo,
  FormField,
  FormButton,
  StandardLink,
} from "../../styles/standardStyles";
import logoImg from "../../assets/logo.png";
export default function Login() {
  const history = useHistory();
  return (
    <LoginContainer>
      <Logo src={logoImg} />
      <FormField type="text" placeholder="email" />
      <FormField type="password" placeholder="senha" />
      <FormButton>Entrar</FormButton>
      <StandardLink onClick={() => history.push("/cadastro")}>
        Não tem uma conta? Cadastre-se!
      </StandardLink>
    </LoginContainer>
  );
}
