import Home from './pages/Home/Home'
import NavBar from './components/Navbar/Navbar';
import Discuss from './pages/Discussion/Discuss'
import FindBuddy from './pages/FindYourBuddy/FindBuddy';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import PrivateRoute from './utilities/privateRouter'
import Footer from './components/Footer/footer';
import Contact from './pages/Contact/contact';
import Login from './pages/authenticate/login';
import Signup from './pages/authenticate/signup';
import Blog from './pages/blog/blog';
import IndPost from './components/IndPost/post';
import Form from './components/postForm/form';

import Profile from './components/Profile/Profile';

function App () {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/discuss" component={Discuss} />
          <Route exact path="/discuss">
             <Discuss />
          </Route>
          <Route exact path="/donate">
            <Form />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/authorise">
            <Login />
          </Route>
          <Route exact path="/addform">
            <Form />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/blog">
            <Blog />
            </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
           <Route exact path="/findbuddy">
            <FindBuddy />
          </Route>
          <Route exact path="/singlepost/:id">
            <IndPost />
          </Route>
        </Switch>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
