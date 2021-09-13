import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { getPercentage } from "../utils";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import DayProgressContext from "../contexts/dayProgressContext";

export default function Footer() {
  const history = useHistory();
  const { todayHabits } = useContext(DayProgressContext);
  const doneToday = todayHabits.filter((habit) => habit.done);
  const percentage = getPercentage(doneToday.length, todayHabits.length);

  return (
    <StyledFooter>
      <span onClick={() => history.push("/habitos")}>Hábitos</span>
      <div onClick={() => history.push("/hoje")}>
        <CircularProgressbar
          onClick={() => history.push("/hoje")}
          value={percentage}
          text="Hoje"
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
      <span onClick={() => history.push("/historico")}>Histórico</span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: fixed;
  height: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 0 20px 0 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: #52b6ff;
  }

  div {
    position: relative;
    bottom: 25px;
    width: 91px;
    height: 91px;
  }
`;
