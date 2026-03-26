import { Route, Switch } from "wouter";
import Home from "./Home";
import FinanceResume from "./FinanceResume";
import GeneralResume from "./GeneralResume";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/finance" component={FinanceResume} />
      <Route path="/general" component={GeneralResume} />
    </Switch>
  );
}
