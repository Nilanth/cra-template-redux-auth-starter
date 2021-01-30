import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux'
import './App.scss';
import LoginPage from 'components/LoginPage';
import Dashboard from 'components/Dashboard';
import Users from 'components/Users';



function App() {
  //Getting isAuthenticated store value from Authentication reducer.
  const { isAuthenticated } = useSelector(state => state.authenticateReducer)
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
          <LoginPage/>
        </PublicRoute>
        <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
          <ProtectedRoutes/>
        </PrivateRoute>
      </Switch>
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

// Here we include the components which need to be accesses after successful login.
function ProtectedRoutes() {
  return (
    <Switch>
      <Route path="/dashboard">
        <Dashboard/>
      </Route>
      <Route path="/users">
        <Users/>
      </Route>
    </Switch>
  );
}

export default App;
