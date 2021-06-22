import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./providers/AuthProvider";
import {
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
} from "./config/paths";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <AuthProvider>
          <Switch>
            <Route path={SIGN_UP_PAGE_PATH} component={SignUp} />
            <Route path={SIGN_IN_PAGE_PATH} component={SignIn} />
            <Route path={DASHBOARD_PAGE_PATH} component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
