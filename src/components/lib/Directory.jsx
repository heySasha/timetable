// довідники
import React from 'react';

import NavLink from './NavLink';

class Directory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            check: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const login = event.target.elements[0].value;
        const password = event.target.elements[1].value;

        window.localStorage.setItem('rr_login', login);
        window.localStorage.setItem('rr_password', password);

        if (login === 'admin' && password === 'admin') {
            this.setState({ check: true });
        }
    }

    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password"/>
                </div>
                <div>
                    <input type="submit" value="Log In"/>
                </div>
            </form>
        );
    }

    renderDisplay() {
        return (
            <section className="content books">
                <div className="mdl-tabs">
                    <div className="mdl-tabs__tab-bar">
                        <NavLink to="/directory" className="mdl-tabs__tab" onlyActiveOnIndex={true}>Формування</NavLink>
                        <NavLink to="/directory/groups" className="mdl-tabs__tab">Групи</NavLink>
                        <NavLink to="/directory/buildings" className="mdl-tabs__tab">Будівлі</NavLink>
                        <NavLink to="/directory/classrooms" className="mdl-tabs__tab">Аудіторії</NavLink>
                        <NavLink to="/directory/departments" className="mdl-tabs__tab">Підрозділи</NavLink>
                        <input type="button" value='Вийти' onClick={()=>{
                            window.localStorage.clear();
                            this.setState({ check: false });
                        }} />
                    </div>
                    <br/>
                    <div className="mdl-tabs__panel">
                        {this.props.children}
                    </div>
                </div>
            </section>
        )
    }

    render() {
        const login = window.localStorage.getItem('rr_login');
        const password = window.localStorage.getItem('rr_password');

         return this.state.check || (login === 'admin' && password === 'admin') ? this.renderDisplay() : this.renderForm()
    }

}

export default Directory;