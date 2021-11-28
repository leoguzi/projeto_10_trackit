import { useHistory } from "react-router-dom";
import { useState } from "react";
import logoImg from "../assets/logo.png";
import { signUp } from "../services/api";
import { loader } from "../utils";
import {
  Logo,
  FormField,
  FormButton,
  StandardLink,
  StyledForm,
  FormWarning,
} from "../standardStyles";

export default function SignUp() {
  const history = useHistory();
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
    name: "",
    imageUrl: "",
    button: "Cadastrar",
  });
  const [invalidFields, setInvalidFields] = useState({
    email: false,
    imgUrl: false,
  });
  const [disabled, setDisabled] = useState(false);

  function handleSignUpError(e) {
    if (e === 422) {
      setInvalidFields({ ...invalidFields, imageUrl: true });
    }
    if (e === 409) {
      setInvalidFields({ ...invalidFields, email: true });
    }
    setFormFields({ ...formFields, button: "Cadastrar" });
    setDisabled(false);
  }

  function handleSignUpSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setFormFields({ ...formFields, button: loader });
    signUp({
      email: formFields.email,
      name: formFields.name,
      image: formFields.imageUrl,
      password: formFields.password,
    })
      .then(() => history.push("/"))
      .catch((e) => handleSignUpError(e.response.status));
  }

  return (
    <StyledForm onSubmit={handleSignUpSubmit}>
      <Logo src={logoImg} />
      <FormField
        required
        disabled={disabled}
        type="email"
        value={formFields.email}
        placeholder="email"
        onChange={(e) => {
          setFormFields({ ...formFields, email: e.target.value });
          setInvalidFields({ ...invalidFields, email: false });
        }}
      />
      {invalidFields.email && <FormWarning>E-mail já cadastrado!!</FormWarning>}

      <FormField
        required
        disabled={disabled}
        type="password"
        value={formFields.password}
        placeholder="senha"
        onChange={(e) =>
          setFormFields({ ...formFields, password: e.target.value })
        }
      />
      <FormField
        required
        disabled={disabled}
        type="text"
        value={formFields.name}
        placeholder="nome"
        onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
      />
      <FormField
        disabled={disabled}
        required
        type="text"
        value={formFields.imageUrl}
        placeholder="foto"
        onChange={(e) => {
          setFormFields({ ...formFields, imageUrl: e.target.value });
          setInvalidFields({ ...invalidFields, imageUrl: false });
        }}
      />
      {invalidFields.imageUrl && <FormWarning>URL invalida!</FormWarning>}
      <FormButton type="submit" disabled={disabled}>
        {formFields.button}
      </FormButton>
      <StandardLink onClick={() => history.push("/")}>
        Já tem uma conta? Faça login!
      </StandardLink>
    </StyledForm>
  );
}
