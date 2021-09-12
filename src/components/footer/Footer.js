import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHistory } from "react-router-dom";
import { StyledFooter } from "./style";
import DayProgressContext from "../../contexts/dayProgressContext";
import { useContext } from "react";
import { getPercentage } from "../../utils";

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
