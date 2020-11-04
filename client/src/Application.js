import React, { Component } from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import Admin from "layouts/Admin.js";
import SignIn from "views/Signin/Signin.js"
import SignUp from "views/SignUp/SignUp.js"
import PasswordReset from "views/PasswordReset/PasswordReset.js"
function Application() {
    const user = null;
    const hist = createBrowserHistory();

    return (
      <p>{user}</p>




      // <Router history={hist}>
      //     <Switch>
      //     user ?
      //       <Route path="/admin" component={Admin} />
      //       <Redirect from="/" to="/admin/dashboard" />
      //     :
      //       <Route path="/login" component={SignIn} />
      //       <Route path="/signup" component={SignUp} />
      //       <Route path="/passwordreset" component={PasswordReset} />
      //       <Redirect to={{ pathname: '/login'}} />
      //     </Switch>
      //   </Router>
    );
  }
  export default Application;