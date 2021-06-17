import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SIGN_UP_PAGE, SIGN_IN_PAGE, DASHBOARD_PAGE } from "./paths/paths";
import NavBar from "./components/NavBar/NavBar";
import SignUp from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { AuthProvider } from "./providers/AuthProvider";

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <AuthProvider>
          <Switch>
            <Route path={SIGN_UP_PAGE} component={SignUp} />
            <Route path={SIGN_IN_PAGE} component={SignIn} />
            <Route path={DASHBOARD_PAGE} component={Dashboard} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
