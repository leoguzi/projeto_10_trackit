import { useState } from "react";
import { FormField } from "../../styles/standardStyles";
import {
  NewHabitForm,
  WeekDay,
  WeekContainer,
  ButtonsContainer,
  SaveButton,
  CancelButton,
} from "./style";
export default function NewHabit({ hideForm }) {
  const defaultWeek = [
    { id: 1, name: "D", selected: false },
    { id: 2, name: "S", selected: false },
    { id: 3, name: "T", selected: false },
    { id: 4, name: "Q", selected: false },
    { id: 5, name: "Q", selected: false },
    { id: 6, name: "S", selected: false },
    { id: 7, name: "S", selected: false },
  ];
  const [week, setWeek] = useState(defaultWeek);
  const [habitName, setHabitName] = useState("");
  function updateWeek(id) {
    week.forEach((day) => {
      if (day.id === id) {
        day.selected ? (day.selected = false) : (day.selected = true);
      }
    });
    setWeek([...week]);
  }
  function checkForm() {
    return;
  }

  return (
    <NewHabitForm onSubmit={checkForm}>
      <FormField
        value={habitName}
        placeholder="nome do hábito"
        onChange={(e) => setHabitName(e.target.value)}
      />
      <WeekContainer>
        {week.map((day, index) => (
          <WeekDay
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
        <SaveButton>Salvar</SaveButton>
      </ButtonsContainer>
    </NewHabitForm>
  );
}
