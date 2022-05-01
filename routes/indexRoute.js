const express = require('express');
const router = express.Router();

let data = [
  '',
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index');
});

//router.post('/', function(req, res, next) {
// 
//});

//router.put('/', function(req, res, next) {
// 
//});

//router.delete('/', function(req, res, next) {
// 
//});

module.exports = router;
