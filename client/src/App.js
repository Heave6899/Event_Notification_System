import React, {  Component } from 'react'
import firebase from './firebase'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount(){
    const messaging = firebase.messaging()
    Notification.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token :',token)
    }).catch(error=>{
      console.log(error)
    })
  }
  render() {
    return ( <div> </div>)
    }
  }