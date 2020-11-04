import React, {useState, useEffect } from 'react'
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import App from "App";
import {auth, generateUserDocument} from "./Firebase_Functions/Auth";

// core components
import Admin from "layouts/Admin.js";
import SignIn from "views/Signin/Signin.js"
import SignUp from "views/SignUp/SignUp.js"
import PasswordReset from "views/PasswordReset/PasswordReset.js"
import PrivateRoute from "components/PrivateRoute/PrivateRoute"
import "assets/css/material-dashboard-react.css?v=1.9.0";
import Application from 'Application'
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/passwordreset" component={PasswordReset} />
      <Route path="/admin" component={Admin} />
      <App />
    </Switch>
  </Router>,
  //<Application /> <Redirect from="/" to="/admin/dashboard" />,
  document.getElementById("root")
);
