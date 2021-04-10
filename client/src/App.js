import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "react-bootstrap";
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
import MyDashboard from './pages/Users/MyDashboard';
import About from './pages/About';
<<<<<<< HEAD
import Bands from './pages/Bands';
=======
import FindUsers from './pages/Users/FindUsers';
import UserShow from './pages/Users/UserShow';
>>>>>>> e37702a83fb824cdbe7e630470e7403062a0f415

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path='/dashboard' component={MyDashboard} />
<<<<<<< HEAD
          <Route exact path='/bands' component={Bands}/>
=======
          <ProtectedRoute exact path='/users' component={FindUsers} />
          <ProtectedRoute exact path='/users/:id' component={UserShow} />
>>>>>>> e37702a83fb824cdbe7e630470e7403062a0f415
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;
