import React from "react";
import Joi from "joi-browser"; //npm i joi-browser
import Form from "./common/form";

class LoginForm extends Form {
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
  //   componentDidMount() {
  //     this.username.current.focus(); //tıklanan alana odaklanacak
  //   }
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
            {/* <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                value={data.username}
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
            {/* <Input
              name="username"
              type="text"
              placeholder="Enter Username"
              value={data.username}
              label="Username"
              onChange={this.handleChange}
              error={errors.username}
            /> */}

            {this.renderInput("username", "text", "Username")}

            {/* <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                value={data.email}
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
            {/* <Input
              name="email"
              type="email"
              placeholder="Enter E-mail"
              value={data.email}
              label="Email"
              onChange={this.handleChange}
              error={errors.email}
            /> */}

            {this.renderInput("email", "email", "E-mail address")}

            {/* { 
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                style={{ textAlign: "center" }}
                value={data.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
           </div> */}
            {/*    { <Input
              name="password"
              type="password"
              placeholder="Enter Password"
              value={data.password}
              label="Password"
              onChange={this.handleChange}
              error={errors.password}
            /> */}

            {this.renderInput("password", "password", "Password")}

            {/* <button
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
            </button> */}
            {this.renderButton("Login", "btn btn-primary", this.validate())}
            {this.renderButton("SigUp", "btn btn-success")}
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
