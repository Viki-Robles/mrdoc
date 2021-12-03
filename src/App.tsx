import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { SignIn } from './components/SignIn/SignIn'
import { Dashboard } from './components/Dashboard/Dashboard'
import { AuthProvider } from './providers/AuthProvider'
import { QueryClientProvider, QueryClient } from 'react-query'
import {
  SIGN_IN_PAGE_PATH,
  SIGN_UP_PAGE_PATH,
  DASHBOARD_PAGE_PATH,
  HOME_PAGE_PATH,
  DOCTOR_PROFILE_PAGE_PATH,
  TREATMENTS_PAGE_PATH,
} from './config/paths'

const NotFound = lazy(() => import('./components/NotFound/NotFound'))
const SignUp = lazy(() => import('./components/SignUp/SignUp'))
const DoctorDashboard = lazy(
  () => import('./components/DoctorDashboard/DoctorDashboard'),
)
const Layout = lazy(() => import('./components/Layout/Layout'))
const Treatments = lazy(() => import('./components/Treatments/Treatments'))

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
          <Suspense fallback={'Loading'}>
            <Router>
              <Switch>
                <Route exact path={SIGN_UP_PAGE_PATH} component={SignUp} />
                <Route exact path={SIGN_IN_PAGE_PATH} component={SignIn} />
                <Route exact path={HOME_PAGE_PATH} component={SignIn} />
                <Layout>
                  <Route
                    exact
                    path={DASHBOARD_PAGE_PATH}
                    component={Dashboard}
                  />
                  <Route
                    exact
                    path={`${DOCTOR_PROFILE_PAGE_PATH}/:doctor_id`}
                    component={DoctorDashboard}
                  />
                  <Route
                    exact
                    path={TREATMENTS_PAGE_PATH}
                    component={Treatments}
                  />
                </Layout>
                <Route exact path="*" component={NotFound} />
              </Switch>
            </Router>
          </Suspense>
        </AuthProvider>
      </QueryClientProvider>
    </div>
  )
}

export default App
