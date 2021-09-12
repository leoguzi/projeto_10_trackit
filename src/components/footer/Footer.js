import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useHistory } from "react-router-dom";
import { StyledFooter } from "./style";

export default function Footer() {
  const history = useHistory();
  const percentage = 50;

  return (
    <StyledFooter>
      <span onClick={() => history.push("/habitos")}>Hábitos</span>
      <div>
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
