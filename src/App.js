import './App.css';
import Header from './components/Header.js';
import Auth from './components/Auth/Auth.js';
import Tasks from './components/Tasks/Tasks.js';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './context/UserContext.js';

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/tasks" component={Tasks} />
        <Route exact path="/">
          <>
            {/* if user redirect to tasks */}
            {user && <Redirect to="/tasks" />}
            {/* if not a user, redirect to sign in */}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
