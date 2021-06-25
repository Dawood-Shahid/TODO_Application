import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


import Auth from './Components/Authentication/Authentication';

function App() {
  return (
    <Router>
      <div className="App">
        <Auth />
      </div>
    </Router>
  );
}

export default App;
