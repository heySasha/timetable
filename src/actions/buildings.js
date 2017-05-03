import axios from 'axios';

export const GET_BUILDINGS = 'GET_BUILDINGS';
export const ADD_BUILDING = 'ADD_BUILDING';
export const DELETE_BUILDING = 'DELETE_BUILDING';
export const EDIT_BUILDING = 'EDIT_BUILDING';

let lastId;

export function getBuildings() {
    console.log('getBuildings');
    return axios.get('/api/buildings')
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .then(buildings => {
            lastId = buildings.rows.length ? buildings.rows[buildings.rows.length - 1].id_building : 1;
            //console.log(building);
            return {
                type: GET_BUILDINGS,
                buildings: buildings.rows
            }
        });
}

export function addBuilding(id_building = ++lastId, name_building, number_building, address_building) {
    return axios.post('/api/buildings', { id_building, name_building, number_building, address_building })
        .then(res => res.data)
        .then(building => ({
            type: ADD_BUILDING,
            building
        }));
}

export function deleteBuilding(id_building) {
    return axios.delete(`/api/buildings/${id_building}`)
        .then(res => ({
            type: DELETE_BUILDING,
            id_building
        }));
}

export function editBuilding(id_building, name_building, number_building, address_building) {
    return axios.put(`/api/buildings/${id_building}`, { name_building, number_building, address_building })
        .then(res => res.data)
        .then(building => ({
            type: EDIT_BUILDING,
            building
        }));
}