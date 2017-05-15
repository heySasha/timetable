import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './App';

import Home from './components/lib/Home';
import NotFound from './components/lib/NotFound';

import Timetable from './components/lib/Timetable';
import Directory from './components/lib/Directory';
import Groups from './components/groups';

import AboutDirectory from './components/lib/AboutDirectory';
import Classrooms from './components/classrooms';
import LoginForm from './components/lib/LoginForm';

import store from './store';

import Buildings from './components/buildings';
import Departments from './components/department'
import { getBuildings, getDepartments, getClassrooms, setClassroomFilter } from './actions';

store.dispatch(getBuildings());
store.dispatch(getDepartments());
store.dispatch(getClassrooms());

function Routes() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="timetable" component={Timetable}/>

                <Route path="directory" component={Directory} >
                    <IndexRoute component={AboutDirectory}/>
                    <Route path="groups" component={Groups}/>
                    <Route path="buildings" component={Buildings}/>
                    <Route path="classrooms" component={Classrooms}/>
                    <Route path="departments" component={Departments}/>
                </Route>

                <Route path="/login" components={LoginForm} />
                <Route path="*" component={NotFound}/>
            </Route>

        </Router>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,

    document.getElementById('root'));

/*
function checkLogin(nextState, replace) {
    const login = window.localStorage.getItem('rr_login');
    if (login === 'admin')
 return;

    if (login !== 'admin') {
        replace('/login');
    } else checkLogin(nextState, replace);
}
*/
