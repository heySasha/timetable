const db = require('../../../express-postgres-api/db');


exports.all = cb => {
    db.get().query('SELECT * FROM sp_department_types;', (err, result) => { cb(err, result); });
};

exports.one = (id, cb) => {
    db.get().query(`SELECT * FROM sp_department_types a WHERE id_department_type = ${id}`, (err, result) => { cb(err, result); })
};
