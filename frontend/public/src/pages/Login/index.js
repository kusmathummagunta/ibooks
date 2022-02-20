import React from "react";
import { render } from "react-dom";

class Login extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
  };

  schema = {};

  handleChange = () => {};

  validateProperty = (input) => {};

  validate = () => {};

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (_.isEmpty(errors)) this.props.signIn(this.state.data);
  };
  render() {
    const { data, errors } = this.state;
    const { email, password } = data;
    const { authMessage, loggedIn } = this.props;
    if (loggedIn) this.props.history.push("/");
    return (
      <div className="background-container pt-5">
        <div className="container">
          <h1 className="header">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              label="Email"
              type="email"
              error={errors["email"]}
              ionClass="fas fa-envelope"
              onChange={this.handleChange}
              placeholder="Please enter your email.."
              value={email}
              autoFocus
            />
            <input
              name="password"
              type="password"
              label="Password"
              error={errors["password"]}
              ionClass="fas fa-key"
              onChange={this.handleChange}
              placeholder="Please enter your password..."
              value={password}
            />
            {authMessage && <p className="text-white">{authMessage}</p>}
            <button disabled={this.validate()} type="submit" label="Login" />
          </form>
        </div>
      </div>
    );
  }
}
