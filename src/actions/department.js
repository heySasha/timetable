import axios from 'axios';

export const GET_DEPARTMENTS = 'GET_DEPARTMENTS';
export const ADD_DEPARTMENT = 'ADD_DEPARTMENT';
export const DELETE_DEPARTMENT = 'DELETE_DEPARTMENT';
export const EDIT_DEPARTMENT = 'EDIT_DEPARTMENT';

let lastId;

export function getDepartments() {
    //console.log(departments.rows);

    return axios.get('/api/departments')
        .then(res => res.data)
        .then(departments => {
            lastId = departments.rows[departments.rows.length - 1].id_department;

            return {
                type: GET_DEPARTMENTS,
                departments: departments.rows
            }
        });
}

/*
export function getDepartments(departments) {
    return axios.get('/api/departments')
        .then(res => res.data)
        .then(departments => ({
            type: GET_DEPARTMENTS,
            departments
        }));
}
*/
export function addDepartment(id_department = ++lastId, name_department, short_name_department, id_department_type, id_department_link = null) {
    return axios.post('api/departments',{ id_department, name_department, short_name_department, id_department_type, id_department_link })
        .then(res => res.data)
        .then(department => ({
            type: ADD_DEPARTMENT,
            department
        }));
}/*
.then(department => ({
    id_department,
    name_department,
    short_name_department,
    id_department_type,
    id_department_link
}));
*/
export function deleteDepartment(id_department) {
    return axios.delete(`api/departments/${id_department}`)
        .then(res => ({
            type: DELETE_DEPARTMENT,
            id_department
        }));
}

export function editDepartment(id_department = lastId, name_department, short_name_department, id_department_type) {
    return axios.put(`api/departments/${id_department}`, { id_department, name_department, short_name_department, id_department_type })
        .then(res => res.data)
        .then(department => ({
            type: EDIT_DEPARTMENT,
            department
        }));
}
