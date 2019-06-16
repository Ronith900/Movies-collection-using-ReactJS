import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  validate = () => {
    const option = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, option);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    //Call the server to verify the user

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is empty";
    }
    if (name === "password") {
      if (value.trim() === "") return "password is empty";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };
  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <div className="col-md-3 offset-md-5">
          <h1>Sign In</h1>
        </div>
        <div className="col-md-3 offset-md-4">
          <form onSubmit={this.handleSubmit}>
            <Input
              name="username"
              label="Username"
              value={account.username}
              onChange={this.handleChange}
              error={errors.username}
            />
            <Input
              name="password"
              label="Password"
              value={account.password}
              onChange={this.handleChange}
              error={errors.password}
            />

            <button className="btn btn-success">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
