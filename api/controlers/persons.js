const Persons = require('../models/persons');

exports.all = (req, res) => {
    Persons.all((err, result) => {
        if (err) {
            //console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.all = (req, res) => {
  Persons.one( req.param.id, (err, result) => {
      if (err) {
          return res.sendStatus(500);
      }
      res.send(result);
  });
};

exports.update = (req, res) => {
    //console.log('Controler UPDATE:', req.body);
    Persons.update( req.params.id,
                    req.body.fname,
                    req.body.sname,
                    req.body.lname,
                    req.body.date_birth,
        err => {
            if (err) {
                //console.log(err);
                return res.sendStatus(500);
            }
            res.send(req.body);
        });
};

exports.delete = (req, res) => {
    Persons.delete(req.params.id, err => {
        if (err) {
            //console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.create = (req, res) => {
    //console.log(req.body);
    Persons.create( req.body.id_person,
                    req.body.fname,
                    req.body.sname,
                    req.body.lname,
                    req.body.date_birth,
        err => {
            if (err) {
                //console.log(err);
                return res.sendStatus(500);
            }

            res.send(req.body);
        });
};

