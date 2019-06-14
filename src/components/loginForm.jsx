import React, { Component } from "react";

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    //Call the server to verify the user
    console.log("Submited");
  };
  render() {
    return (
      <div>
        <div className="col-md-3 offset-md-5">
          <h1>Sign In</h1>
        </div>
        <div className="col-md-3 offset-md-4">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input autoFocus type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input id="password" type="text" className="form-control" />
            </div>

            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
