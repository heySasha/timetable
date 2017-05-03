const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');
const departmentsController = require('./api/controlers/departments');
const departmentTypesController = require('./api/controlers/department_types');
const buildingsController = require('./api/controlers/buildings');
const classroomsController = require('./api/controlers/classrooms');
const personsController = require('./api/controlers/persons');

const app = express();

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
    res.send('Hey!');
});
//      DEPARTMENTS
app.get('/api/departments', departmentsController.all);
app.get('/api/departments/:id', departmentsController.children);
app.patch('/api/departments/:id', departmentsController.one);
app.delete('/api/departments/:id', departmentsController.delete);
app.put('/api/departments/:id', departmentsController.update);
app.post('/api/departments', departmentsController.create);
/*     DEPARTMENT TYPES       */
app.get('/api/department_types', departmentTypesController.all);
app.patch('/api/department_types/:id', departmentTypesController.one);
/*     GROUPS                 */
//app.get('/api/groups', groupsController.all);
//app.patch('/api/groups/:id', groupsController.one);
//app.delete('/api/groups/:id', groupsController.delete);
//app.put('/api/groups/:id', groupsController.update);
//app.post('/api/groups', groupsController.create);
/*     PERSONS                */
app.get('/api/persons', personsController.all);
app.patch('/api/persons/:id', personsController.one);
app.delete('/api/persons/:id', personsController.delete);
app.put('/api/persons/:id', personsController.update);
app.post('/api/persons', personsController.create);
/*     TEACHERS                */
//app.get('/api/teachers', teachersController.all);
//app.patch('/api/teachers/:id', teachersController.one);
//app.delete('/api/teachers/:id', teachersController.delete);
//app.put('/api/teachers/:id', teachersController.update);
//app.post('/api/teachers', teachersController.create);
/*     BUILDINGS                */
app.get('/api/buildings', buildingsController.all);
app.delete('/api/buildings/:id', buildingsController.delete);
app.put('/api/buildings/:id', buildingsController.update);
app.post('/api/buildings', buildingsController.create);
/*      CLASSROOMS              */
app.get('/api/classrooms', classroomsController.all);
app.get('/api/classrooms/:id', classroomsController.ofBuilding);
app.delete('/api/classrooms/:id', classroomsController.delete);
app.put('/api/classrooms/:id', classroomsController.update);
app.post('/api/classrooms', classroomsController.create);

db.connect(err => {
    if (err) {
        return console.log(err);
    }
    app.listen( app.get('port'), () => console.log(`Start server! ${app.get('port')}`) );
});


