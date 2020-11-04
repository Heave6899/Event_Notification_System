import React, {useState, useEffect } from 'react'
import {auth} from "../../Firebase_Functions/Auth";
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [currentUser,setCurrentUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged( user => {setCurrentUser(user)})
  });
  console.log(currentUser?.displayName);
  // Add your own authentication on the below line.
  return (
    <Route
      {...rest}
      render={props =>
        currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute