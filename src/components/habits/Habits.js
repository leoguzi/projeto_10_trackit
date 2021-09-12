import { Title, Container } from "../../styles/standardStyles";
import { AddHabit, StyledSpan } from "./style";
import { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/userContext";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { MdAddBox } from "react-icons/md";
import { getHabits, deleteHabit } from "../../api";
import NewHabit from "./NewHabit";
import Habit from "./Habit";
export default function Habits() {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState(false);

  const noHabits =
    "Você não possui nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!";

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
              <Habit key={index} habit={habit} removeHabit={removeHabit} />
            ))
          : ""}

        <StyledSpan>{habits ? "" : noHabits}</StyledSpan>
      </Container>
      <Footer />
    </>
  );
}
