import React from "react";

class FormValidation extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {
                username: '',
                email: '',
                password: '',
                confirmPassword: '',
            },
        };
    }

    validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length > 3 ? "" : "Username must be at least 3 characters";
                break;
            case "email":
                errors.email = this.validateEmail(value) ? "" : "Email is not valid";
                break;
            case "password":
                errors.password = value.length > 6 ? "" : "Password must be at least 6 characters";
                break;
            case "confirmPassword":
                errors.confirmPassword = value === this.state.password ? "" : "Password & confirm password must be match";
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        alert(this.state.username);
        alert(this.state.email);
        alert(this.state.password);
    };
    isSubmitActive() {
        return Object.keys(this.state.errors).reduce((acc, key) => {
          if (this.state.errors[key]) {
            acc = false;
          }
          return acc;
        }, true);
      }

    render() {
        let { username, email, password, confirmPassword } = this.state.errors;
        return (
            
            <form onSubmit={this.handleSubmit}>
                <h1>Registration</h1>
                <label htmlFor="username">Username</label>
                <input
                    value={this.state.username}
                    onChange={this.handleInput}
                    placeholder="Enter Username"
                    name="username"
                    type="text"
                    id="username"
                    className={username && "error"}
                ></input>
                <span>{username}</span>

                <label htmlFor="user">Email</label>
                <input
                    value={this.state.email}
                    onChange={this.handleInput}
                    placeholder="Enter email"
                    name="email"
                    type="text"
                    id="user"
                    className={email && "error"}
                ></input>
                <span>{email}</span>

                <label htmlFor="password">Password</label>
                <input
                    value={this.state.password}
                    onChange={this.handleInput}
                    placeholder="Enter password"
                    name="password"
                    type="password"
                    id="password"
                    className={password && "error"}
                ></input>
                <span>{password}</span>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    value={this.state.confirmPassword}
                    onChange={this.handleInput}
                    placeholder="Enter password again"
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    className={confirmPassword && "error"}
                ></input>
                <span>{confirmPassword}</span>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormValidation;