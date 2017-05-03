import { ADD_BUILDING, DELETE_BUILDING, EDIT_BUILDING, GET_BUILDINGS } from '../actions';

function buildingReducer(state = {}, action) {
    switch (action.type) {
        case EDIT_BUILDING:
            return state.id_building !== action.building.id_building ? state : action.building;
        default:
            return state;
    }
}

export default (state = [], action) => {
    switch(action.type) {
        case GET_BUILDINGS:
            return action.buildings;
        case ADD_BUILDING:
            return [...state, action.building];
        case DELETE_BUILDING:
            const index = state.findIndex(building => building.id_building === action.id_building);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        case EDIT_BUILDING:
            return state.map(building => buildingReducer(building, action));
        default:
            return state;
    }
}