import { useState, useContext } from "react";
import { FormField } from "../../styles/standardStyles";
import UserContext from "../../contexts/userContext";
import { loader, defaultWeek } from "../../utils";
import { registerHabit } from "../../api";
import {
  NewHabitForm,
  WeekDay,
  WeekContainer,
  ButtonsContainer,
  SaveButton,
  CancelButton,
} from "./style";
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
