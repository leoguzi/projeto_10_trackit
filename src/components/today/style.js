import styled from "styled-components";

const PercentageDone = styled.h2`
  margin: 10px 0 0 0;
  font-size: 18px;
  color: ${(props) => (props.noneDone ? "#bababa" : "#8fc549")};
`;

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
  color: ${(props) => (props.checked ? "#8fc549}" : "#ebebeb")};
`;

export { PercentageDone, DailyHabitCard, CheckMarkContainer, TextContainer };
