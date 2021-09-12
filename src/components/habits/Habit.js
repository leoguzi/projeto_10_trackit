import { HabitCard, WeekContainer, WeekDay, BinContainer } from "./style";
import { defaultWeek } from "../../utils";
import { RiDeleteBin6Line } from "react-icons/ri";
export default function Habit({ habit, removeHabit }) {
  return (
    <HabitCard>
      <h1>{habit.name}</h1>
      <WeekContainer>
        {defaultWeek.map((day, index) => (
          <WeekDay key={index} selected={habit.days.includes(day.id)}>
            {day.name}
          </WeekDay>
        ))}
      </WeekContainer>
      <BinContainer onClick={() => removeHabit(habit.id)}>
        <RiDeleteBin6Line />
      </BinContainer>
    </HabitCard>
  );
}
