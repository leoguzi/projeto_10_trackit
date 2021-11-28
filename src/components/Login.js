import { useHistory } from "react-router-dom";
import UserContext from "../contexts/userContext";
import { useContext, useState } from "react";
import { login } from "../services/api";
import logoImg from "../assets/logo.png";
import { loader } from "../utils";
import {
  Logo,
  StyledForm,
  FormField,
  FormButton,
  FormWarning,
  StandardLink,
} from "../standardStyles";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    button: "Entrar",
  });
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);

  function handleError() {
    setInvalidCredentials(true);
    setDisabled(false);
    setFormFields({ ...formFields, button: "Entrar" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setFormFields({ ...formFields, button: loader });

    login({ email: formFields.email, password: formFields.password })
      .then((r) => redirect(r.data))
      .catch(handleError);
  }

  function redirect(userData) {
    setUser(userData);
    history.push("/hoje");
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <Logo src={logoImg} />
        <FormField
          disabled={disabled}
          value={formFields.email}
          required
          type="email"
          placeholder="email"
          onChange={(e) => {
            setFormFields({ ...formFields, email: e.target.value });
            setInvalidCredentials(false);
          }}
        />
        <FormField
          disabled={disabled}
          value={formFields.password}
          required
          type="password"
          placeholder="senha"
          onChange={(e) => {
            setFormFields({ ...formFields, password: e.target.value });
            setInvalidCredentials(false);
          }}
        />
        {invalidCredentials && (
          <FormWarning>Verifique suas credenciais!</FormWarning>
        )}
        <FormButton disabled={disabled} type="submit">
          {formFields.button}
        </FormButton>
        <StandardLink onClick={() => history.push("/cadastro")}>
          Não tem uma conta? Cadastre-se!
        </StandardLink>
      </StyledForm>
    </>
  );
}
