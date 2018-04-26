import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';


// THESE ARE THE ROUTES FOR OUR NEW PAGES - BRING THEM BACK ONLINE ONCE THE VIEW EXIST
  import ViewPage from './components/ViewPage/ViewPage';
 // import TotalPage from './components/TotalPage/TotalPage';

import AddPage from './components/AddPage/AddPage';


import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />

        {/* THESE ARE THE ROUTES FOR OUR NEW PAGES - BRING THEM BACK ONLINE ONCE THE VIEW EXIST */}
        <Route
          path="/view"
          component={ViewPage}
        <Route
          path="/add"
          component={AddPage}
        />
        {/* <Route
          path="/total"
          component={TotalPage}
        />  */}


      </Switch>
    </Router>
  </div>
);

export default App;
