import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { SignUp } from "./components/SignUp/SignUp";
import { SignIn } from "./components/SignIn/SignIn";
import { Welcome } from "./components/Welcome/Welcome";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Bookings } from "./components/Bookings/Bookings";
import { AuthProvider } from "./providers/AuthProvider";
import { Treatments } from "./components/Treatments/Treatments";
import {
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  WELCOME_PAGE_PATH,
  TREATMENTS_PAGE_PATH,
  BOOKINGS_PAGE_PATH,
} from "./config/paths";
import { useApolloClient } from "../src/utils/useApolloClient/useApolloClient";
import { ApolloProvider } from "@apollo/client";

function App(): JSX.Element {
  const client = useApolloClient();
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Router>
          <AuthProvider>
            <Layout>
              <Switch>
                <Route path={WELCOME_PAGE_PATH} component={Welcome} />
                <Route path={SIGN_UP_PAGE_PATH} component={SignUp} />
                <Route path={SIGN_IN_PAGE_PATH} component={SignIn} />
                <Route path={DASHBOARD_PAGE_PATH} component={Dashboard} />
                <Route path={BOOKINGS_PAGE_PATH} component={Bookings} />
                <Route path={TREATMENTS_PAGE_PATH} component={Treatments} />
              </Switch>
            </Layout>
          </AuthProvider>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
