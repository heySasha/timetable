const DepartmentTypes = require('../models/department_types');


exports.all = (req, res) => {
    DepartmentTypes.all((err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows);
    });
};

exports.one = (req, res) => {
    DepartmentTypes.one(Number(req.params.id), (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result.rows[0]);
    });
};

