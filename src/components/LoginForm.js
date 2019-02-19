import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'
// eslint-disable-next-line
import Layout from './Layout'

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      handle:"",
      error:""
    };
  }

  setUser = ({user, isUser})=>{
    if(isUser){
      this.setError("User name taken")
    }else{
      this.setError("")
      this.props.setUser(user)
    }
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    const { socket } = this.props
    const { handle } = this.state
    socket.emit(VERIFY_USER, handle, this.setUser)
  }

  handleChange = (e)=>{
    this.setState({handle:e.target.value})
  }

  setError = (error)=>{
    this.setState({error})
  }

  render() {  
    const { handle, error } = this.state
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login-form" >

          <label htmlFor="handle">
            <h2>Got a handle?</h2>
          </label>
          <input
            ref={(input)=>{ this.textInput = input }} 
            type="text"
            id="handle"
            value={handle}
            onChange={this.handleChange}
            placeholder={'GoodBuddy'}
            />
            <div className="error">{error ? error:null}</div>

        </form>
      </div>
    );
  }
}