import { combineReducers } from 'redux';

import { default as departmentsReducer } from './department';
import { default as buildingsReducer } from './buildings';
import classroomsReducer, * as fromClassrooms from './classrooms'
import classroomFilter from './classroomFilter';

const reducer = combineReducers({
    departments: departmentsReducer,
    buildings: buildingsReducer,
    classrooms: classroomsReducer,
    classroomFilter
});

/*
function reducer(state = {}, action) {
    return {
        departments: departmentReducer(state.rows, action)
    };
}
*/

export default reducer;


export function getFilteredClassrooms(state) {
    return fromClassrooms.getFilteredClassrooms(state.classrooms, state.filter);
}
