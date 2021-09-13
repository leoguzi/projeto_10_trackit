import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";

export default function DailyHabit({ habit, updateHabitCard }) {
  const sequenceEqualsRecord =
    habit.highestSequence === habit.currentSequence && habit.done;
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
          <GreenSpan isGreen={sequenceEqualsRecord}>
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

const DailyHabitCard = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
  width: 100%;
  height: 94px;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  background-color: #ffffff;
  h1 {
    font-size: 20px;
  }
`;

const TextContainer = styled.div`
  color: #666666;
  padding: 10px 0 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CheckMarkContainer = styled.div`
  font-size: 90px;
  color: ${(props) => (props.checked ? "#8fc549" : "#ebebeb")};
`;

const GreenSpan = styled.span`
  color: ${(props) => (props.isGreen ? "#8fc549" : "#666666")};
`;
