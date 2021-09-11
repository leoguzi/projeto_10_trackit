import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { StyledFooter } from "./style";

export default function Footer() {
  const percentage = 50;
  return (
    <StyledFooter>
      <span>Hábitos</span>
      <div>
        <CircularProgressbar
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
      <span>Histórico</span>
    </StyledFooter>
  );
}
