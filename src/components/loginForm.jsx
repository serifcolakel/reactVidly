import React, { Component } from "react";
import Input from "./common/input";
import Joi from "joi-browser"; //npm i joi-browser

class LoginForm extends Component {
  state = {
    account: { username: "", password: "", email: "" },
    errors: {},
  };
  schema = {
    username: Joi.string().min(4).max(12).required().label("Username"),
    password: Joi.string().min(4).max(12).required().label("Password"),
    email: Joi.string().email({ tlds: false }).required().label("E-mail"),
  };

  username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus(); //tıklanan alana odaklanacak
  //   }

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // "name" ne ise ona göre işlev yapacak (dinamik kodlama)
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema, { abortEarly: false });
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.account, this.schema, options);
    //for beginner (for me ) :)
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
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

  handleSubmit = (e) => {
    e.preventDefault(); //formun yeniden yollanmasını engelliyoruz
    //call the server
    // const username = document.getElementById("username").value;
    // const username = this.username.current.value;
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    //console.log(errors);
    console.log("submitted");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="d-flex">
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                value={account.username}
                autoFocus //componentDidMount yerine kullanılır
                ref={this.username}
                onChange={this.handleChange}
                id="username"
                name="username"
                type="text"
                className="form-control"
                placeholder="Enter username"
                style={{ textAlign: "center" }}
              />
            </div> */}
            <Input
              name="username"
              type="text"
              placeholder="Enter Username"
              value={account.username}
              label="Username"
              onChange={this.handleChange}
              error={errors.username}
            />
            {/* <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={account.email}
                type="email"
                onChange={this.handleChange}
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                style={{ textAlign: "center" }}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div> */}
            <Input
              name="email"
              type="email"
              placeholder="Enter E-mail"
              value={account.email}
              label="Email"
              onChange={this.handleChange}
              error={errors.email}
            />
            {/* 
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                style={{ textAlign: "center" }}
                value={account.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
            </div> */}
            <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={account.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
            />

            <button
              type="submit"
              disabled={this.validate()}
              onClick={this.login}
              className="btn btn-primary"
            >
              Login
            </button>

            <button
              onClick={this.signup}
              style={{ marginLeft: "35px" }}
              className="btn btn-success"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
      //   <div classname="center">
      //    <div classname="form">
      //     <form >
      //       <h1>Login</h1>
      //       <div className="form-group">
      //         <label htmlFor="username">Username</label>
      //         <input id="username" type="text" className="form-control" />
      //       </div>
      //       <div className="form-group">
      //         <label htmlFor="password">Password</label>
      //         <input id="password" type="text" className="form-control" />
      //       </div>
      //       <button className="btn btn-primary">Login</button>
      //     </form>
      //    </div>
      //   </div>
    );
  }
}
export default LoginForm;
