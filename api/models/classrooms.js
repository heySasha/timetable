const db = require('../../../express-postgres-api/db');

exports.all = cb => {
    db.get().query(
        `SELECT a.id_classroom, \
            a.number_classroom, \
            a.id_building, \
            a.count_places \
        FROM sp_classrooms a \
        ORDER BY 1;`,
    (err, result) => { cb(err, result); });
};

exports.ofBuilding = (id_building, cb) => {
    db.get().query(
        `SELECT a.id_classroom, \
            a.number_classroom, \
            a.count_places, \
            a.id_building \
        FROM sp_classrooms a \
        WHERE  a.id_building = ${id_building};`,
    (err, result) => { cb(err, result); });
};

exports.update = (id, number, count_places, id_building, cb) => {
    db.get().query(
        `UPDATE sp_classrooms \
        SET number_classroom = '${number}', \
            count_places = ${count_places}, \
            id_building = ${id_building} \
        WHERE id_building = ${id};`,
    err => { cb(err); });
};

exports.delete = (id, cb) => {
    db.get().query(`DELETE FROM sp_classrooms \
        WHERE id_classroom = ${id}`,
    err => { cb(err); });
};

exports.create = (id, number, count_places, id_building, cb) => {
    //console.log('Create:', new_dep);
    db.get().query(`INSERT INTO sp_classrooms (
            id_classroom, \
            number_classroom, \
            count_places, \
            id_building \
        ) VALUES (\
            ${id}, \
            '${number}', \
            ${count_places}, \
            ${id_building});`,
        err => { cb(err); });
};