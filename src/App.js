import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Habits from './components/habits/Habits';
import Today from './components/today/Today';
import History from './components/History';
import UserContext from './contexts/userContext';
import DayProgressContext from './contexts/dayProgressContext';
import { GlobalStyle } from './globalStyles';

function App() {
  const [user, setUser] = useState(null);
  const [todayHabits, setTodayHabits] = useState([]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
          <Route path='/cadastro' exact>
            <SignUp />
          </Route>
          <DayProgressContext.Provider value={{ todayHabits, setTodayHabits }}>
            <Route path='/habitos' exact>
              <Habits />
            </Route>
            <Route path='/hoje' exact>
              <Today />
            </Route>
            <Route path='/historico' exact>
              <History />
            </Route>
          </DayProgressContext.Provider>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
