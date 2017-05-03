const db = require('../../../express-postgres-api/db');

exports.all = cb => {
    db.get().query(`SELECT a.id_person, \
                        a.fname, \
                        a.sname, \
                        a.lname, \
                        a.date_birth \
                    FROM sp_persons a \
                    ORDER BY 1;`,
        (err, result) => { cb(err, result); });
};

exports.one = (id, cb) => {
  db.get().query(`SELECT a.id_person, \
                        a.fname, \
                        a.sname, \
                        a.lname, \
                        a.date_birth \
                    FROM sp_persons a \
                    WHERE a.id_person = ${id};`,
      (err, result) => { cb(err, result); });
};

exports.update = (id, fname, sname, lname, date_birth, cb) => {
    db.get().query(`UPDATE sp_persons \
                    SET fname = '${fname}', \
                        sname = '${sname}', \
                        lname = '${lname}', \
                        date_birth = ${date_birth}
                    WHERE id_person = ${id};`,
        err => { cb(err); });
};

exports.delete = (id, cb) => {
    db.get().query(`DELETE FROM sp_persons \
                    WHERE id_person = ${id}`,
        err => { cb(err); });
};

exports.create = (id, fname, sname, lname, date_birth, cb) => {
    //console.log('Create:', new_dep);
    db.get().query(`INSERT INTO sp_persons (
                        id_person,\
                        fname,\
                        sname,\
                        lname) 
                    VALUES (\
                        ${id},
                        '${fname}',\
                        '${sname}',\
                        '${date_birth}')`,
        err => { cb(err); });
};