import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignIn } from '../components/SignIn/SignIn'
import { Dashboard } from '../components/Dashboard/Dashboard'
import { AuthProvider } from '../providers/AuthProvider'
import {
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  HOME_PAGE_PATH,
} from '../config/paths'
import { QueryClientProvider, QueryClient } from 'react-query'
import { NotFound } from '../components/NotFound/NotFound'
import { SignUp } from '../components/SignUp/SignUp'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15000,
      suspense: true,
    },
  },
})

function App(): JSX.Element {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path={SIGN_UP_PAGE_PATH} component={SignUp} />
              <Route exact path={SIGN_IN_PAGE_PATH} component={SignIn} />
              <Route exact path={HOME_PAGE_PATH} component={SignIn} />
              <Route exact path={DASHBOARD_PAGE_PATH} component={Dashboard} />
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Router>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App