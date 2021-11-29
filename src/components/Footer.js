import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import styled from 'styled-components';
import { getPercentage } from '../utils';
import 'react-circular-progressbar/dist/styles.css';
import DayProgressContext from '../contexts/dayProgressContext';
import { colors } from '../globalStyles';

export default function Footer() {
  const history = useHistory();
  const { todayHabits } = useContext(DayProgressContext);
  const doneToday = todayHabits.filter((habit) => habit.done);
  const percentage = getPercentage(doneToday.length, todayHabits.length);

  return (
    <StyledFooter>
      <span onClick={() => history.push('/habitos')}>Hábitos</span>
      <div onClick={() => history.push('/hoje')}>
        <CircularProgressbar
          onClick={() => history.push('/hoje')}
          value={percentage}
          text='Hoje'
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: `${colors.color3}`,
            textColor: `${colors.color4}`,
            pathColor: `${colors.color4}`,
            trailColor: 'transparent',
          })}
        />
      </div>
      <span onClick={() => history.push('/historico')}>Histórico</span>
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
  background-color: ${colors.color4};
  padding: 0 20px 0 20px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.color3};
  }

  div {
    position: relative;
    bottom: 25px;
    width: 91px;
    height: 91px;
  }
`;
