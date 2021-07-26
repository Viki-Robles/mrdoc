import React, { Suspense } from "react";
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
import { QueryClientProvider, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
      suspense: true,
    },
  },
});

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={"Loading"}>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AuthProvider>
              <Switch>
                <Route path={SIGN_UP_PAGE_PATH} component={SignUp} />
                <Route path={SIGN_IN_PAGE_PATH} component={SignIn} />
                <Layout>
                  <Route path={WELCOME_PAGE_PATH} component={Welcome} />
                  <Route path={DASHBOARD_PAGE_PATH} component={Dashboard} />
                  <Route path={BOOKINGS_PAGE_PATH} component={Bookings} />
                  <Route path={TREATMENTS_PAGE_PATH} component={Treatments} />
                </Layout>
              </Switch>
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </Suspense>
    </div>
  );
}

export default App;
