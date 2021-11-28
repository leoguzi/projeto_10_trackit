import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import { Title, Container } from "../standardStyles";

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

const StyledSpan = styled.span`
  font-size: 18;
  color: #666666;
  margin-top: 20px;
`;
