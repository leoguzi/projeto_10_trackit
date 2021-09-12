import {
  DailyHabitCard,
  CheckMarkContainer,
  TextContainer,
  GreenSpan,
} from "./style";
import { AiFillCheckSquare } from "react-icons/ai";
export default function DailyHabit({ habit, updateHabitCard }) {
  return (
    <DailyHabitCard onClick={() => updateHabitCard(habit.id, habit.done)}>
      <TextContainer>
        <h1>{habit.name}</h1>
        <span>
          Sequencia atual:{" "}
          <GreenSpan isGreen={habit.done}>
            {habit.currentSequence} dias
          </GreenSpan>
        </span>
        <span>
          Seu recorde:{" "}
          <GreenSpan
            isGreen={
              habit.highestSequence === habit.currentSequence && habit.done
            }
          >
            {habit.highestSequence} dias
          </GreenSpan>
        </span>
      </TextContainer>
      <CheckMarkContainer checked={habit.done}>
        <AiFillCheckSquare />
      </CheckMarkContainer>
    </DailyHabitCard>
  );
}
