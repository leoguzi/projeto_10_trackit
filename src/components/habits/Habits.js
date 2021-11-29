import { useState, useEffect, useContext } from 'react';
import { MdAddBox } from 'react-icons/md';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Title, Container } from '../../commonStyles';
import { getHabits, deleteHabit, getTodayHabits } from '../../services/api';
import UserContext from '../../contexts/userContext';
import Footer from '../Footer';
import Header from '../Header';
import NewHabit from './NewHabit';
import HabitCard from './HabitCard';
import { colors } from '../../globalStyles';
import DayProgressContext from '../../contexts/dayProgressContext';

export default function Habits() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [habits, setHabits] = useState(false);
  const { setTodayHabits } = useContext(DayProgressContext);

  if (!user) {
    history.push('/');
  }

  function updateHabits() {
    getHabits(user.token).then((re) => setHabits(re.data));
  }

  function hideForm() {
    setShowForm(false);
    updateHabits();
  }

  useEffect(
    () => getHabits(user?.token).then((re) => setHabits(re.data)),
    [user?.token]
  );

  function removeHabit(id) {
    deleteHabit(id, user.token).then(() => {
      updateHabits();
      getTodayHabits(user.token).then((r) => setTodayHabits(r.data));
    });
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
        {showForm ? <NewHabit hideForm={hideForm} /> : ''}

        {habits &&
          habits.map((habit, index) => (
            <HabitCard key={index} habit={habit} removeHabit={removeHabit} />
          ))}
        {habits.length === 0 && (
          <StyledSpan>
            Você não possui nenhum hábito cadastrado ainda. Adicione um hábito
            para começar a trackear!
          </StyledSpan>
        )}
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
  color: ${colors.color2}; ;
`;

const StyledSpan = styled.span`
  font-size: 18px;
  color: ${colors.color6};
`;
