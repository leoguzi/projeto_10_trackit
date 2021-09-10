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
    </BrowserRouter>
  );
}

export default App;