import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import './App.scss';
import LoginPage from "components/LoginPage";
import Dashboard from "components/Dashboard";
import Users from "components/Users";
import { useSelector } from 'react-redux'


function App() {
    const {isAuthenticated} = useSelector(state => state.authenticateReducer)
    return (
        <Router>
            <Switch>
                <PublicRoute path="/login" isAuthenticated={isAuthenticated}>
                    <LoginPage/>
                </PublicRoute>
                <PublicRoute path="/public" isAuthenticated={isAuthenticated}>
                    <PublicPage/>
                </PublicRoute>
                <PrivateRoute path="/" isAuthenticated={isAuthenticated}>
                    <ProtectedRoutes/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

function PrivateRoute({children, isAuthenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
}

function PublicRoute({children, isAuthenticated, ...rest}) {
    return (
        <Route
            {...rest}
            render={
                ({location}) =>
                    !isAuthenticated ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/dashboard',
                                state: {from: location}
                            }}
                        />
                    )
            }
        />
    );
}

function PublicPage() {
    return <h3>Public</h3>;
}

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
