import React, {  Component } from 'react'
import firebase from './Firebase_Functions/Firebase'

export default class App extends Component {
  componentDidMount(){
    const messaging = firebase.messaging()
    messaging.requestPermission().then(()=>{
      return messaging.getToken()
    }).then(token=>{
      console.log('Token :',token)
    }).catch(()=>{
      console.log('error')
    })
  }
  render() {
    return ( <div> </div>)
    }
  }