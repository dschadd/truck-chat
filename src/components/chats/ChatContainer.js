import React, { Component } from 'react';
import Layout from './../Layout'
import LoginForm from './../LoginForm'


export default class ChatContainer extends Component {
  render() {
    const { user, logout } = this.props
    return (
      <div>Chat Container</div>  
    );
  }
}