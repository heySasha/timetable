import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

import reducer from '../redusers';

const store = createStore(reducer, applyMiddleware(promise, thunk));

export default store;