import {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import './App.scss';
import ProtectedRoutes from 'routes/ProtectedRoutes';

const LoginPage = lazy(() => import('features/OnBoarding/LoginPage'));



function App() {
  //Getting isAuthenticated store value from Authentication slice.
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated)

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
            <LoginPage/>
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
            <ProtectedRoutes/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}

// Private route restrict to access public pages after login.
function PrivateRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        (isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        ))
      }
    />
  );
}

// Public route restrict to access authenticated pages before login.
function PublicRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) =>
          (!isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/dashboard',
                state: {from: location},
              }}
            />
          ))
      }
    />
  );
}

export default App;
