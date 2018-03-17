const express = require('express');
const router = express.Router();
var db = require('../models');

// HTML - homepage
router.get('/', function(req, res) {
    db.Company.findAll({}).then(function(data) {
        var hbsObject = {
            companies: data
        };
        res.render('index', hbsObject)
    });
});

// HTML - company page
router.get('/company/:id', function(req, res) {
    db.Company.findOne({
        where: {id: req.params.id}
    }).then(function(data) {
        res.render('company', data.dataValues);
    })
});

// API - get all companies
router.get('/api/companies', function(req, res) {
    db.Company.findAll({}).then(function(data) {
        res.json(data);
    });
});

// API - get one company
router.get('/api/company/:id', function(req, res) {
    db.Company.findOne({
        where: {id: req.params.id}
    }).then(function(data) {
        res.json(data);
    })
});


// // API post new example
// router.post('/api/company', function(req, res) {
//     db.Company.create({
//         description: req.body.description,
//         done: false
//     }).then(function(data) {
//         res.json(data);
//     });
// });

// // API change example
// router.put('/api/company/:id', function(req, res) {
//     db.Company.update({
//         done: req.body.done
//     }, {
//         where: { id: req.params.id }
//     }).then(function(data) {
//         res.json(data);
//     });
// });

// Export routes
module.exports = router;



