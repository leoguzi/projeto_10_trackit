import { useContext, useEffect } from "react";
import UserContext from "../../contexts/userContext";
import { Container, Title } from "../../styles/standardStyles";
import { defaultWeek, getPercentage } from "../../utils";
import { PercentageDone } from "./style";
import { getTodayHabits } from "../../api";
import DayProgressContext from "../../contexts/dayProgressContext";
import DailyHabit from "./DailyHabit";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import dayjs from "dayjs";
import { checkHabit, uncheckHabit } from "../../api";

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
