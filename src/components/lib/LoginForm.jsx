import React from 'react';


class LoginForm extends React.Component {
    constructor(props) {
            super(props);
            this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        const value = event.target.elements[0].value;
        window.localStorage.setItem('rr_login', value);

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>

                <div>
                    <input type="submit" value="Log In"/>
                </div>
            </form>
        );
    }
}

/*
 <div>
 <label>Password:</label>
 <input type="password" name="password"/>
 </div>
 */

export default LoginForm;