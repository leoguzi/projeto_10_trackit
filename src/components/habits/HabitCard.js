import { RiDeleteBin6Line } from 'react-icons/ri';
import styled from 'styled-components';
import { WeekContainer, WeekDay } from '../../standardStyles';
import { defaultWeek } from '../../utils';
import { colors } from '../../globalStyles';

export default function HabitCard({ habit, removeHabit }) {
  return (
    <HabitCardContainer>
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
    </HabitCardContainer>
  );
}

const HabitCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 91px;
  background-color: ${colors.color4};
  margin: 10px 0 10px 0;
  border-radius: 5px;
  padding-top: 10px;
  h1 {
    font-size: 20px;
    color: ${colors.color6};
    margin: 0px 0 10px 0;
  }
`;

const BinContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 43px;
  color: ${colors.color8};
  font-size: 20px;
`;
