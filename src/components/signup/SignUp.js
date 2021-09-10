import { useHistory } from "react-router-dom";
import { SignInContainer } from "./style";
import logoImg from "../../assets/logo.png";
import {
  Logo,
  FormField,
  FormButton,
  StandardLink,
} from "../../styles/standardStyles";
export default function SignUp() {
  const history = useHistory();
  return (
    <SignInContainer>
      <Logo src={logoImg} />
      <FormField type="text" placeholder="email" />
      <FormField type="password" placeholder="senha" />
      <FormField type="text" placeholder="nome" />
      <FormField type="text" placeholder="foto" />
      <FormButton>Cadastrar</FormButton>
      <StandardLink onClick={() => history.push("/")}>
        Já tem uma conta? Faça login!
      </StandardLink>
    </SignInContainer>
  );
}
