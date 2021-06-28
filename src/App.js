import React,{useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router'
import {
  useDispatch
} from 'react-redux'

import './App.css';
import Auth from './Components/Authentication/Authentication';
import PrivateRoute from './route/PrivateRoute';
import TodoApp from './Components/TodoApp/TodoApp';
import {
  getTodos
} from './redux/todo/todoAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    // dispatch(getTodos());
  }, [])

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
