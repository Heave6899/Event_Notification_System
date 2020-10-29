import React, { Component, createContext } from "react";
import { auth, generateUserDocument } from 'Firebase_Functions/Auth';

export const UserContext = createContext({ user: null });
class UserProvider extends Component {
  state = {
    user: null
  };
  componentDidMount = () => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      this.setState({ user });
      console.log(this.user);
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;