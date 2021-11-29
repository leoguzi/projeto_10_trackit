import { useState, useContext } from 'react';
import styled from 'styled-components';
import { colors } from '../../globalStyles';
import {
  FormField,
  WeekDay,
  WeekContainer,
  FormWarning,
} from '../../commonStyles';
import { loader, defaultWeek } from '../../utils';
import { registerHabit, getTodayHabits } from '../../services/api';
import UserContext from '../../contexts/userContext';
import DayProgressContext from '../../contexts/dayProgressContext';

export default function NewHabit({ hideForm }) {
  const { setTodayHabits } = useContext(DayProgressContext);
  const [week, setWeek] = useState(defaultWeek);
  const [habitName, setHabitName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [warning, setWarning] = useState(false);
  const { user } = useContext(UserContext);

  function updateWeek(id) {
    week.forEach((day) => {
      if (day.id === id) {
        day.selected ? (day.selected = false) : (day.selected = true);
      }
    });
    setWeek([...week]);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    const selectedDays = week.filter((day) => day.selected);
    if (selectedDays.length > 0) {
      const habit = {
        name: habitName,
        days: selectedDays.map((day) => day.id),
      };
      registerHabit(habit, user.token).then(() => {
        hideForm();
        getTodayHabits(user.token).then((r) => setTodayHabits(r.data));
      });
      week.forEach((day) => (day.selected = false));
    } else {
      setWarning(true);
      setDisabled(false);
    }
  }
  return (
    <NewHabitForm onSubmit={HandleSubmit}>
      <FormField
        required
        disabled={disabled}
        value={habitName}
        placeholder='novo hábito'
        onChange={(e) => setHabitName(e.target.value)}
      />
      <WeekContainer>
        {week.map((day, index) => (
          <WeekDay
            type='push'
            disabled={disabled}
            key={index}
            id={day.id}
            selected={day.selected}
            onClick={(e) => {
              updateWeek(parseInt(e.target.id, 10));
              setWarning(false);
            }}
          >
            {day.name}
          </WeekDay>
        ))}
      </WeekContainer>
      {warning && <FormWarning>Selecione pelo menos um dia!</FormWarning>}
      <ButtonsContainer>
        <CancelButton onClick={() => hideForm()}>Cancelar</CancelButton>
        <SaveButton type='submit'>{disabled ? loader : 'Salvar'}</SaveButton>
      </ButtonsContainer>
    </NewHabitForm>
  );
}

const NewHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 180px;
  padding: 15px 0 0 5px;
  border-radius: 5px;
  margin: 0 0 20px 0;
  background-color: ${colors.color4};
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 30px 15px 0 0;
`;

const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 35px;
  color: ${colors.color4};
  background-color: ${(props) =>
    props.disabled ? `${colors.color1}` : `${colors.color2}`};
  font-size: 16px;
  border: none;
  border-radius: 3px;
`;

const CancelButton = styled.button`
  color: ${colors.color2};
  background-color: ${colors.color4};
  border: none;
  font-size: 16px;
  margin-right: 15px;
`;
