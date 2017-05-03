import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './App';

import Home from './components/Home';
import NotFound from './components/NotFound';

import Timetable from './components/Timetable';
import Directory from './components/Directory';
import Groups from './components/Groups';

import AboutDirectory from './components/AboutDirectory';
import Subjects from './components/Subjects';
import Faculties from './components/Faculties';

import store from './store';

import Buildings from './components/buildings';
import Departments from './components/department'
import { getBuildings } from './actions';
import { getDepartments } from  './actions';

store.dispatch(getBuildings());
store.dispatch(getDepartments());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="timetable" component={Timetable}/>
                <Route path="directory" component={Directory}>
                    <IndexRoute component={AboutDirectory}/>
                    <Route path="groups" component={Groups}/>
                    <Route path="buildings" component={Buildings}/>
                    <Route path="subjects" component={Subjects}/>
                    <Route path="faculties" component={Departments}/>
                </Route>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,

    document.getElementById('root'));