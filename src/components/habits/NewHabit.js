import { useState, useContext } from "react";
import { FormField, WeekDay, WeekContainer } from "../../standardStyles";
import { loader, defaultWeek } from "../../utils";
import { registerHabit } from "../../services/api";
import UserContext from "../../contexts/userContext";
import styled from "styled-components";

export default function NewHabit({ hideForm }) {
  const [week, setWeek] = useState(defaultWeek);
  const [habitName, setHabitName] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [buttonContent, setButtonContent] = useState("Salvar");
  const { user } = useContext(UserContext);

  function updateWeek(id) {
    week.forEach((day) => {
      if (day.id === id) {
        day.selected ? (day.selected = false) : (day.selected = true);
      }
    });
    setWeek([...week]);
  }

  function checkForm(e) {
    e.preventDefault();
    setDisabled(true);
    setButtonContent(loader);
    const selectedDays = week.filter((day) => day.selected);
    const isValid = habitName.length > 0 && selectedDays.length > 0;
    if (isValid) {
      const habit = {
        name: habitName,
        days: selectedDays.map((day) => day.id),
      };
      registerHabit(habit, user.token).then(hideForm);
      week.forEach((day) => (day.selected = false));
    } else {
      alert("Insira os dados corretamente!");
      setButtonContent("Salvar");
      setDisabled(false);
    }
  }

  return (
    <NewHabitForm onSubmit={checkForm}>
      <FormField
        disabled={disabled}
        value={habitName}
        placeholder="nome do hábito"
        onChange={(e) => setHabitName(e.target.value)}
      />
      <WeekContainer>
        {week.map((day, index) => (
          <WeekDay
            type="push"
            disabled={disabled}
            key={index}
            id={day.id}
            selected={day.selected}
            onClick={(e) => updateWeek(parseInt(e.target.id))}
          >
            {day.name}
          </WeekDay>
        ))}
      </WeekContainer>
      <ButtonsContainer>
        <CancelButton onClick={() => hideForm()}>Cancelar</CancelButton>
        <SaveButton type="submit">{buttonContent}</SaveButton>
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
  background-color: #ffffff;
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
  color: #ffffff;
  background-color: ${(props) => (props.disabled ? "#86ccff" : "#52b6ff")};
  font-size: 16px;
  border: none;
  border-radius: 3px;
`;

const CancelButton = styled.button`
  color: #52b6ff;
  background-color: #ffffff;
  border: none;
  font-size: 16px;
  margin-right: 15px;
`;
