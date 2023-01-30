import './App.css';
import Header from './components/Header.js';
import Auth from './components/Auth/Auth.js';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
