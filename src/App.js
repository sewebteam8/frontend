import Home from './pages/Home/Home'
import NavBar from './components/Navbar/Navbar';
import Discuss from './pages/Discussion/Discuss'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Footer from './components/Footer/footer';
import Contact from './pages/Contact/contact';
import Login from './pages/authenticate/login';

function App () {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/discuss">
            <Discuss />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
