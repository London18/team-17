var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Express' });
});

router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Express' });
});

router.get('/stats', function(req, res, next) {
  res.render('stats', { title: 'Express' });
});

exports.index = function(req, res){
  res.render('index', { title: 'ejs' });};


    
    
module.exports = router;
