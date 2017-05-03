const db = require('../../../express-postgres-api/db');

const bSelect = 'sp_departments.id_department, ' +
    'sp_departments.name_department, ' +
    'sp_departments.short_name_department, ' +
    'sp_departments.id_department_type, ' +
    'sp_departments.id_department_link';

exports.all = cb => {
    console.log(db.get());
    db.get().query(`SELECT ${bSelect}, name_department_type \
    FROM sp_departments left join sp_department_types ON sp_departments.id_department_type = sp_department_types.id_department_type \
    ORDER BY 1;`, (err, result) => { cb(err, result); }); /// сортувати по id
};

exports.one = (id, cb) => {
    db.get().query(`SELECT ${bSelect} FROM sp_departments a WHERE id_department = ${id}`, (err, result) => { cb(err, result); })
};

exports.children = (id, cb) => {
    console.log(id);
    db.get().query(`SELECT * FROM sp_departments WHERE id_department_link ${id?'=':'is'} ${id}`, (err, result) => { cb(err, result); })
};

exports.update = (id, name_dep, short_name_dep, id_dep_type, cb) => {
  db.get().query( `UPDATE sp_departments SET name_department = '${name_dep}', short_name_department = '${short_name_dep}', id_department_type = ${id_dep_type} WHERE id_department = ${id};`,  err => { cb(err); });
};

exports.delete = (id, cb) => {
   db.get().query(`DELETE FROM sp_departments WHERE id_department = ${id}`, err => { cb(err); });
};

exports.create = (new_dep, cb) => {
    console.log('Create:', new_dep);

    db.get().query(`INSERT INTO sp_departments (
        id_department,\
        name_department,\
        short_name_department,\
        id_department_type,\
        id_department_link\
    ) VALUES (\
        ${new_dep.id_department},
        '${new_dep.name_department}',\
        '${new_dep.short_name_department}',\
        ${new_dep.id_department_type},\
        ${new_dep.id_department_link})`, err => { cb(err); });
};

