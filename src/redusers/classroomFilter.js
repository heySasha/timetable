import { SET_CLASSROOM_FILTER } from '../actions';

function reducer(state = '1', action) {
    switch (action.type) {
        case SET_CLASSROOM_FILTER:
            return action.filter;

        default:
            return state;
    }
}

export default reducer;