import axios from 'axios';

export const GET_CLASSROOMS = 'GET_CLASSROOMS';
export const ADD_CLASSROOM = 'ADD_CLASSROOMS';
export const DELETE_CLASSROOM = 'DELETE_CLASSROOMS';
export const EDIT_CLASSROOM = 'EDIT_CLASSROOMS';

let lastId;

export function getClassrooms() {
    //console.log('getClassrooms');
    return axios.get('/api/classrooms')
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .then(classrooms => {
            lastId = classrooms.rows.length ? classrooms.rows[classrooms.rows.length - 1].id_building : 1;
            //console.log(building);
            return {
                type: GET_CLASSROOMS,
                classrooms: classrooms.rows
            }
        });
}

export function addClassroom(id_classroom = ++lastId, number_classroom, count_places, id_building) {
    return axios.post('/api/buildings', { id_classroom, number_classroom, count_places, id_building })
        .then(res => res.data)
        .then(classroom => ({
            type: ADD_CLASSROOM,
            classroom
        }));
}

export function deleteClassroom(id_classroom) {
    return axios.delete(`/api/buildings/${id_classroom}`)
        .then(res => ({
            type: DELETE_CLASSROOM,
            id_classroom
        }));
}

export function editClassroom(id_classroom, number_classroom, count_places, id_building) {
    return axios.put(`/api/buildings/${id_classroom}`, { id_classroom, number_classroom, count_places, id_building })
        .then(res => res.data)
        .then(classroom => ({
            type: EDIT_CLASSROOM,
            classroom
        }));
}