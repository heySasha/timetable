const Departments = require('../models/departments');


exports.all = (req, res) => {
    Departments.all((err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.one = (req, res) => {
    Departments.one(Number(req.params.id), (err, result) => {
       if (err) {
           console.log(err);
           return res.sendStatus(500);
       }
       res.send(result.rows[0]);
    });
};

exports.children = (req, res) => {
    Departments.children(Number(req.params.id) || null, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    });
};

exports.update = (req, res) => {
    console.log('Controler UPDATE:', req.body);

    Departments.update(req.params.id, req.body.name_department, req.body.short_name_department, req.body.id_department_type, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.body);
  });
};

exports.delete = (req, res) => {
    Departments.delete(req.params.id, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.create = (req, res) => {
    console.log(req.body);
    Departments.create(req.body, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        res.send(req.body);
    });
};