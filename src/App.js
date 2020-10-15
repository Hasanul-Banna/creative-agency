import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Order from './Components/Order';
import Yourcourse from './Components/Yourcourse';
import YourReview from './Components/YourReview';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="/yourcourse">
            <Yourcourse/>
          </Route>
          <Route path="/yourreview">
            <YourReview/>
          </Route>
          <Route path="/order">
            <Order/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
