const db = require('../../../express-postgres-api/db');

exports.all = cb => {
    db.get().query(`SELECT a.id_building, \
                        a.name_building, \
                        a.number_building, \
                        a.address_building \
                    FROM sp_buildings a \
                    ORDER BY 1;`, // сортувати по id
        (err, result) => { cb(err, result); });
};

exports.update = (id, name, number, address, cb) => {
    db.get().query( `UPDATE sp_buildings \
        SET name_building = '${name}', \
            number_building = '${number}', \
            address_building = '${address}' \
        WHERE id_building = ${id};`,
    err => { cb(err); });
};

exports.delete = (id, cb) => {
    db.get().query(`DELETE FROM sp_buildings \
        WHERE id_building = ${id}`,
    err => { cb(err); });
};

exports.create = (id, name, number, address, cb) => {
    //console.log('Create:', new_dep);
    db.get().query(`INSERT INTO sp_buildings (
            id_building,\
            name_building,\
            number_building,\
            address_building\
        ) VALUES (\
            ${id},
            '${name}',\
            ${number},\
            '${address}')`,
    err => { cb(err); });
};

