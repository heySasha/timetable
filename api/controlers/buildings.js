const Buildings = require('../models/buildings');


exports.all = (req, res) => {
    Buildings.all((err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
};

exports.update = (req, res) => {
    //console.log('Controler UPDATE:', req.body);
    Buildings.update(req.params.id,
        req.body.name_building,
        req.body.number_building,
        req.body.address_building, err => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(req.body);
    });
};

exports.delete = (req, res) => {
    Buildings.delete(req.params.id, err => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.create = (req, res) => {
    //console.log(req.body);
    Buildings.create(
        req.body.id_building,
        req.body.name_building,
        req.body.number_building,
        req.body.address_building, err => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }

            res.send(req.body);
    });
};