import React, {useState, useEffect } from 'react'
import firebase from './Firebase_Functions/Firebase'
import { createBrowserHistory } from "history";
import {auth, generateUserDocument} from "./Firebase_Functions/Auth";
import Signin from "views/Signin/Signin.js"
import Signup from "views/SignUp/SignUp.js"
import UserProvider from "Services/AuthContext"
import Application from 'Application';
import { Router,Redirect } from 'react-router-dom';
import Admin from "./layouts/Admin";

function App() {
  const [currentUser,setCurrentUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged( user => {
    //   let userSessionTimeout = null;

    // if (user === null && userSessionTimeout) {
    //   clearTimeout(userSessionTimeout);
    //   userSessionTimeout = null;
    // } else {
    //   user.getIdTokenResult().then((idTokenResult) => {
    //     const authTime = idTokenResult.claims.auth_time * 1000;
    //     const sessionDurationInMilliseconds = 60 * 60 * 1000; // 60 min
    //     const expirationInMilliseconds = sessionDurationInMilliseconds - (Date.now() - authTime);
    //     userSessionTimeout = setTimeout(() => auth.signOut(), expirationInMilliseconds);
    //   });
      setCurrentUser(user)
      //console.log(user.displayName)
    
    })
  },[])
  return (
    <div>
  {currentUser?.displayName?(<Redirect from="/" to="/admin/dashboard"/>):(<Signin/>)}
  </div>
  ) 
}
export default App;
