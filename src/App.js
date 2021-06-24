import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Auth from './Components/Authentication/Authentication';
import Store from './Store/Store';

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Auth />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
