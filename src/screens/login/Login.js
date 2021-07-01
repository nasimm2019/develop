/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Form,
  Button
} from 'react-bootstrap';
import { connect } from "react-redux";
import { Box } from '../../components';
import { Link } from 'react-router-dom'
import routes from '../../constants/routes';
import { setLogin } from "../../redux/actions/actions";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      email: "",
      errors: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hasError(key) {
    return this.state.errors.indexOf(key) !== -1;
  }

  handleInputChange(event) {
    var key = event.target.name;
    var value = event.target.value;
    var obj = {};
    obj[key] = value;
    this.setState(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    //VALIDATE
    var errors = [];

    //firstname
    if (this.state.firstname === "") {
      errors.push("firstname");
    }

    //email
    const expression = /\S+@\S+/;
    var validEmail = expression.test(String(this.state.email).toLowerCase());

    if (!validEmail) {
      errors.push("email");
    }

    this.setState({
      errors: errors
    });

    if (errors.length > 0) {
      return false;
    } else {
      localStorage.setItem('name', this.state.firstname)
      localStorage.setItem('jwt-token', 'xvfdjhjfg')

      debugger
      this.props.dispatch(setLogin(true))
      this.props.history.push(routes.HOME)
    }
  }

  render() {
    return (
      <div className="container login">
        <form className="row">
          <Box>
            <h3>Sign In</h3>

            <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Firstname"
                className={
                  this.hasError("firstname")
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <Form.Text className={
                this.hasError("firstname") ? "inline-errormsg" : "hidden"
              }>
                Please enter a value
              </Form.Text>
            </Form.Group>


            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={
                  this.hasError("email")
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                type="email"
                placeholder="Enter Email"
              />
              <Form.Text className={this.hasError("email") ? "inline-errormsg" : "hidden"}>
                Email is invalid or missing
              </Form.Text>
            </Form.Group>

            <Button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign In</Button>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account? <Link to={routes.REGISTER} className="ml-2">Sign Up</Link>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </Box>
        </form>
      </div>
    );
  }
}

export default connect(null,null)(Login);
