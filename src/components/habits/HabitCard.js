import { WeekContainer, WeekDay } from "../../styles/standardStyles";
import { defaultWeek } from "../../utils";
import { RiDeleteBin6Line } from "react-icons/ri";
import styled from "styled-components";

export default function HabitCard({ habit, removeHabit }) {
  return (
    <StyledHabitCard>
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
    </StyledHabitCard>
  );
}

const StyledHabitCard = styled.div`
  position: relative;
  width: 100%;
  height: 91px;
  background-color: #ffffff;
  margin: 10px 0 10px 0;
  border-radius: 5px;
  padding-top: 10px;
  h1 {
    font-size: 20px;
    color: #666666;
    margin: 0px 0 10px 10px;
  }
`;

const BinContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  color: #666666;
  font-size: 20px;
`;
