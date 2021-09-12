import { DailyHabitCard, CheckMarkContainer, TextContainer } from "./style";
import { AiFillCheckSquare } from "react-icons/ai";
export default function DailyHabit({ habit, updateHabitCard }) {
  return (
    <DailyHabitCard onClick={() => updateHabitCard(habit.id, habit.done)}>
      <TextContainer>
        <h1>{habit.name}</h1>
        <span>Sequencia atual: {habit.currentSequence}</span>
        <span>Seu recorde: {habit.highestSequence}</span>
      </TextContainer>
      <CheckMarkContainer checked={habit.done}>
        <AiFillCheckSquare />
      </CheckMarkContainer>
    </DailyHabitCard>
  );
}
