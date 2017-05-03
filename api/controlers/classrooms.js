const Classrooms = require('../models/classrooms');

exports.all = (req, res) => {
  Classrooms.all((err, result) => {
      if (err) {
          console.log(err);
          return res.sendStatus(500);
      }
      res.send(result);
  })
};

exports.ofBuilding = (req, res) => {
  Classrooms.ofBuilding(req.params.id, (err, result) => {
      if (err) {
          console.log(err);
          return res.sendStatus(500);
      }
      res.send(result);
  })
};

exports.update = (req, res) => {
    console.log('Controler UPDATE:', req.body);

    Classrooms.update(req.params.id, req.body.number_classroom, req.body.count_places, req.body.id_building, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(req.body);
    });
};

exports.delete = (req, res) => {
    Classrooms.delete(req.params.id, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.create = (req, res) => {
    console.log(req.body);
    Classrooms.create(req.params.id, req.body.number_classroom, req.body.count_places, req.body.id_building, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }

        res.send(req.body);
    });
};