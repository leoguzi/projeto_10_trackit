import { useHistory } from "react-router-dom";
import { useState } from "react";
import { SignInContainer } from "./style";
import logoImg from "../../assets/logo.png";
import { signUp } from "../../api";
import { isValidEmail, loader } from "../../utils";
import {
  Logo,
  FormField,
  FormButton,
  StandardLink,
} from "../../styles/standardStyles";

export default function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [buttonContent, setButtonContent] = useState("Cadastrar");
  const [disabled, setDisabled] = useState(false);

  function handleSignUpSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    setButtonContent(loader);
    const newUserData = {
      email: email,
      name: name,
      image: imageLink,
      password: password,
    };
    if (email && password && name && isValidEmail(email) && imageLink) {
      signUp(newUserData)
        .then(() => history.push("/"))
        .catch((e) => console.log(e));
    } else {
      alert("Verifique os dados!");
      setButtonContent("Cadastrar");
      setDisabled(false);
    }
  }
  return (
    <SignInContainer onSubmit={handleSignUpSubmit}>
      <Logo src={logoImg} />
      <FormField
        disabled={disabled}
        type="text"
        value={email}
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        disabled={disabled}
        type="password"
        value={password}
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormField
        disabled={disabled}
        type="text"
        value={name}
        placeholder="nome"
        onChange={(e) => setName(e.target.value)}
      />
      <FormField
        disabled={disabled}
        type="text"
        value={imageLink}
        placeholder="foto"
        onChange={(e) => setImageLink(e.target.value)}
      />
      <FormButton type="submit" disabled={disabled}>
        {buttonContent}
      </FormButton>

      <StandardLink onClick={() => history.push("/")}>
        Já tem uma conta? Faça login!
      </StandardLink>
    </SignInContainer>
  );
}
