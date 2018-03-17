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
router.get('/company/:slug', function(req, res) {
    db.Company.findOne({
        where: {slug: req.params.slug}
    }).then(function(data) {
        res.render('company', {
            data: data.dataValues,
            helpers: {
                thousands: function (x) {
                    x = x.toString();
                    var pattern = /(-?\d+)(\d{3})/;
                    while (pattern.test(x))
                        x = x.replace(pattern, "$1,$2");
                    return x;
                }
            }
        });
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

// API - post a correction
router.post('/api/correction', function(req, res) {
    db.Correction.create({
        company_id: req.body.company_id,
        company_name: req.body.company_name,
        field: req.body.field,
        correct_value: req.body.correct_value
    }).then(function(data) {
        res.json(data);
    });
});

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



