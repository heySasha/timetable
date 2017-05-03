import { combineReducers } from 'redux';

import { default as departmentsReducer } from './department';
import { default as buildingsReducer } from './buildings';

const reducer = combineReducers({
    departments: departmentsReducer,
    buildings: buildingsReducer
});

/*
function reducer(state = {}, action) {
    return {
        departments: departmentReducer(state.rows, action)
    };
}
*/

export default reducer;


