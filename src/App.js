import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Profile from './Components/Profile';
import Films from './Components/Films';


function App() {
  return (
    <div className="App">

      <Router>
          <Route exact path='/' component={Profile} />
      </Router>

      <Profile />
    </div>
  );
}

export default App;
