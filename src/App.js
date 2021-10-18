import Home from './pages/Home/home'
import NavBar from './components/Navbar/Navbar';
import Discuss from './pages/Discussion/Discuss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';

function App () {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/discuss">
            <Discuss />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
