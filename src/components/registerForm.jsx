import React from "react";
import Joi from "joi-browser"; //npm i joi-browser
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", email: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().min(4).max(12).required().label("Username"),
    password: Joi.string().min(4).max(12).required().label("Password"),
    email: Joi.string().email({ tlds: false }).required().label("E-mail"),
  };

  username = React.createRef();
  doSubmit = () => {
    //call the server
    console.log("submitted");
  };
  render() {
    return (
      <div className="d-flex">
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            {this.renderInput("username", "text", "Username")}
            {this.renderInput("email", "email", "E-mail")}
            {this.renderInput("password", "password", "Password")}
            {this.renderButton("Register", "btn btn-primary", this.validate())}
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
