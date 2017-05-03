import {GET_DEPARTMENTS, ADD_DEPARTMENT, DELETE_DEPARTMENT, EDIT_DEPARTMENT } from '../actions';

function departmentReducer(state = {}, action) {
    switch (action.type) {
        /*
        case ADD_DEPARTMENT:
            return {
                id_department: action.id_department,
                name_department: action.name_department,
                short_name_department: action.short_name_department,
                id_department_type: action.id_department_type,
                id_department_link: action.id_department_link
            };
         */
        case EDIT_DEPARTMENT:
            console.log('EDIT DEP:', action);
            return state.id_department !== action.department.id_department ? state : action.department;
        default:
            return state;
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case GET_DEPARTMENTS:
            return action.departments;
        case ADD_DEPARTMENT:
            return [...state, action.department];

        case DELETE_DEPARTMENT:
            console.log(state);
            const index = state.findIndex(department => department.id_department === action.id_department);
            console.log(index);
            console.log([...state.slice(0, index), ...state.slice(index + 1)]);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case EDIT_DEPARTMENT:
            console.log('EDIT', state.map(department => departmentReducer(department, action)));
            return state.map(department => departmentReducer(department, action));
        default:
            return state;
    }
}