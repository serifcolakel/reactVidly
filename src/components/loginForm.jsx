import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  //   componentDidMount() {
  //     this.username.current.focus(); //tıklanan alana odaklanacak
  //   }
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  handleSubmit = (e) => {
    e.preventDefault(); //formun yeniden yollanmasını engelliyoruz
    //call the server
    // const username = document.getElementById("username").value;
    // const username = this.username.current.value;
    console.log("submitted");
  };
  state = {
    account: { username: "", password: "", email: "" },
  };
  render() {
    const { account } = this.state;
    return (
      <div className="d-flex">
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>
            <div className="form-group">
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
            </div>
            <div className="form-group">
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
            </div>

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
            </div>

            <button
              type="submit"
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
