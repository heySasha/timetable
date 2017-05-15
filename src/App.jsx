import React from 'react';

import NavLink from './components/lib/NavLink';

class App extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-layout--no-drawer-button mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">

                        <span className="mdl-layout-spacer"/>
                        <nav className="mdl-navigation">
                            <NavLink to="/" className="mdl-navigation__link" onlyActiveOnIndex={true}>Головна</NavLink>
                            <NavLink to="/timetable" className="mdl-navigation__link">Розклад</NavLink>
                            <NavLink to="/directory" className="mdl-navigation__link">Довідники</NavLink>
                        </nav>
                    </div>
                </header>

                <main className="mdl-layout__content">
                    {this.props.children}
                </main>
            </div>
        );
    }
}

// <span className="mdl-layout-title">Schedule</span>

export default App;