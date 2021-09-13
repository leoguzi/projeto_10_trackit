import Header from "../header/Header";
import Footer from "../footer/Footer";
import { StyledSpan } from "./style";
import { Title, Container } from "../../styles/standardStyles";
export default function History() {
  return (
    <Container>
      <Header />
      <Title>Historico</Title>
      <StyledSpan>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </StyledSpan>
      <Footer />
    </Container>
  );
}
