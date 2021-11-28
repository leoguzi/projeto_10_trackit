import { useContext, useEffect } from "react";
import { Container, Title } from "../../standardStyles";
import { defaultWeek, getPercentage } from "../../utils";
import { getTodayHabits, checkHabit, uncheckHabit } from "../../services/api";
import styled from "styled-components";
import UserContext from "../../contexts/userContext";
import DayProgressContext from "../../contexts/dayProgressContext";
import DailyHabit from "./DailyHabit";
import Header from "../Header";
import Footer from "../Footer";
import dayjs from "dayjs";

export default function Today() {
  const { user } = useContext(UserContext);
  const { todayHabits, setTodayHabits } = useContext(DayProgressContext);
  const doneToday = todayHabits.filter((habit) => habit.done);
  const percentage = getPercentage(doneToday.length, todayHabits.length);
  const weekDay = defaultWeek.filter(
    (day) => day.id === parseInt(dayjs().day())
  );
  const currentDay = `${weekDay[0].extendedName}, ${dayjs().format("DD/MM")} `;

  useEffect(
    () => getTodayHabits(user.token).then((r) => setTodayHabits(r.data)),
    []
  );

  function updateHabitCard(id, done) {
    done
      ? uncheckHabit(id, user.token).then(updateCurrentDay)
      : checkHabit(id, user.token).then(updateCurrentDay);
  }

  function updateCurrentDay() {
    getTodayHabits(user.token).then((r) => setTodayHabits(r.data));
  }

  return (
    <>
      <Header />
      <Container>
        <Title>{currentDay}</Title>
        <PercentageDone noneDone={percentage === 0}>
          {percentage > 0
            ? percentage + "% dos hábitos concluídos"
            : "Nenhum hábito concluido ainda"}
        </PercentageDone>
        {todayHabits.length > 0 ? (
          todayHabits.map((habit, index) => (
            <DailyHabit
              key={index}
              habit={habit}
              updateHabitCard={updateHabitCard}
            />
          ))
        ) : (
          <PercentageDone noneDone={percentage === 0}>
            Nenhum hábito cadastrado para hoje.
          </PercentageDone>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
}

const PercentageDone = styled.h2`
  margin: 10px 0 0 0;
  font-size: 18px;
  color: ${(props) => (props.noneDone ? "#bababa" : "#8fc549")};
`;
