import { Title, Container } from "../../styles/standardStyles";
import { AddHabit, StyledSpan } from "./style";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/userContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { MdAddBox } from "react-icons/md";
import styled from "styled-components";
import NewHabit from "./NewHabit";
export default function Habits() {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState(false);
  const noHabits =
    "Você não possui nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";
  function hideForm() {
    setShowForm(false);
  }
  /* useEffect(()=>
  
  ,[])
 */
  return (
    <>
      <Header />
      <Container>
        <AddHabit>
          <Title>Meus hábitos</Title>
          <MdAddBox
            onClick={() => (showForm ? setShowForm(false) : setShowForm(true))}
          />
        </AddHabit>
        {showForm ? <NewHabit hideForm={hideForm} /> : ""}
        <StyledSpan>{habits ? "" : noHabits}</StyledSpan>
      </Container>
      <Footer />
    </>
  );
}
