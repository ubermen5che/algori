import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Main from "./pages/Main"
import Detail from "./pages/Detail"
import ProblemRegister from "./pages/ProblemRegister"
import Search from "./pages/Search"
import Login from "./pages/Login"
import ReviewRegister from "./pages/ReviewRegister"
import ReviewUpdate from "./pages/ReviewUpdate";
import GuestBook from "./pages/GuestBook";
import NotFound from "./pages/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/problems/:problemId" component={Detail} />
          <Route exact path="/search" component={Search} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/write" component={ProblemRegister} />
          <Route exact path="/problems/:problemId/reviews/write" component={ReviewRegister} />
          <Route exact path="/reviews/update" component={ReviewUpdate} />

          <Route exact path="/guest" component={GuestBook} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
