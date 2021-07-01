import React, { Component } from "react";
import {
  Form,
  Button
} from 'react-bootstrap';
import { Box } from '../../components';
import { Link } from 'react-router-dom'
import routes from '../../constants/routes';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      email: "",
      password:'',
      lastname:'',
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
    //lastname
    if (this.state.lastname === "") {
      errors.push("lastname");
    }
    //password
    if (this.state.password === "") {
      errors.push("password");
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
     
      this.props.history.push(routes.LOGIN)
    }
  }

  render() {
    return (
      <div className="container register">
        <Box>
          <form>
            <h3>Sign Up</h3>

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
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleInputChange}
                type="text"
                placeholder="Enter Last Name"
                className={
                  this.hasError("lastname")
                    ? "form-control is-invalid"
                    : "form-control"
                }
              />
              <Form.Text className={
                this.hasError("lastname") ? "inline-errormsg" : "hidden"
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

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={
                  this.hasError("password")
                    ? "form-control is-invalid"
                    : "form-control"
                }
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                type="password"
                placeholder="Enter Password"
              />
              <Form.Text className={this.hasError("password") ? "inline-errormsg" : "hidden"}>
                Pasword is missing
              </Form.Text>
            </Form.Group>

            <Button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</Button>
            <p className="forgot-password text-right">
              Already registered <Link to={routes.LOGIN}>sign in?</Link>
            </p>
          </form>
        </Box>
      </div>
    );
  }
}