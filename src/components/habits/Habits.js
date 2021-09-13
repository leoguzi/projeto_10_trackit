import { Title, Container } from "../../styles/standardStyles";
import { useState, useEffect, useContext } from "react";
import { MdAddBox } from "react-icons/md";
import { getHabits, deleteHabit } from "../../api";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";
import Footer from "../Footer";
import Header from "../Header";
import NewHabit from "./NewHabit";
import HabitCard from "./HabitCard";

export default function Habits() {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState(false);

  function hideForm() {
    setShowForm(false);
    updateHabits();
  }

  useEffect(() => getHabits(user.token).then((re) => setHabits(re.data)), []);

  function updateHabits() {
    getHabits(user.token).then((re) => setHabits(re.data));
  }

  function removeHabit(id) {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      deleteHabit(id, user.token).then(updateHabits);
    }
  }

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

        {habits
          ? habits.map((habit, index) => (
              <HabitCard key={index} habit={habit} removeHabit={removeHabit} />
            ))
          : ""}
        <StyledSpan>
          {habits.length > 0
            ? ""
            : "Você não possui nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
        </StyledSpan>
      </Container>
      <Footer />
    </>
  );
}

const AddHabit = styled.div`
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 50px;
  color: #52b6ff;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: #666666;
`;
