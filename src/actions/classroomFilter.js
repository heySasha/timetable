export const SET_CLASSROOM_FILTER = 'SET_CLASSROOM_FILTER';
export const GET_CLASSROOM_FILTER = 'GET_CLASSROOM_FILTER';

export function setClassroomFilter(filter) {
    return {
        type: SET_CLASSROOM_FILTER,
        filter
    };
}

export function getClassroomFilter() {
    return {
        type: GET_CLASSROOM_FILTER,
        filter: classrooomFilter
    };
}