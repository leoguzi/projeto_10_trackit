import Login from "./components/login/Login";
import SignUp from "./components/signup/SignUp";
import Habits from "./components/habits/Habits";
import Today from "./components/today/Today";
import History from "./components/history/History";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/cadastro">
          <SignUp />
        </Route>
        <Route path="/habitos">
          <Habits />
        </Route>
        <Route path="/hoje">
          <Today />
        </Route>
        <Route path="/historico">
          <History />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
