import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Habits from "./components/habits/Habits";
import Today from "./components/today/Today";
import History from "./components/history/History";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserContext from "./contexts/userContext";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/cadastro" exact>
            <SignUp />
          </Route>
          <Route path="/habitos" exact>
            <Habits />
          </Route>
          <Route path="/hoje" exact>
            <Today />
          </Route>
          <Route path="/historico" exact>
            <History />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
