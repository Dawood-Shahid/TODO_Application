import { BrowserRouter as Router } from 'react-router-dom';
import {Switch, Route} from 'react-router'
import './App.css';

import Auth from './Components/Authentication/Authentication';
import PrivateRoute from './route/PrivateRoute';
import TodoApp from './Components/TodoApp/TodoApp';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/todo-app' component={TodoApp} />
          <Route to='/' component={Auth} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
