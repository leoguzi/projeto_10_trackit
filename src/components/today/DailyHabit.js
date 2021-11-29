import styled from 'styled-components';
import { AiFillCheckSquare } from 'react-icons/ai';
import { colors } from '../../globalStyles';

export default function DailyHabit({ habit, updateHabitCard }) {
  const sequenceEqualsRecord =
    habit.highestSequence === habit.currentSequence && habit.done;
  return (
    <DailyHabitCard onClick={() => updateHabitCard(habit.id, habit.done)}>
      <TextContainer>
        <h1>{habit.name}</h1>
        <span>
          Sequencia atual:{' '}
          <GreenSpan isGreen={habit.done}>
            {habit.currentSequence} dias
          </GreenSpan>
        </span>
        <span>
          Seu recorde:{' '}
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
  background-color: ${colors.color4};
  h1 {
    font-size: 20px;
  }
`;

const TextContainer = styled.div`
  color: ${colors.color6};
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const CheckMarkContainer = styled.div`
  font-size: 90px;
  color: ${(props) =>
    props.checked ? `${colors.color7}` : `${colors.color0}`};
`;

const GreenSpan = styled.span`
  color: ${(props) =>
    props.isGreen ? `${colors.color7}` : `${colors.color6}`};
`;
