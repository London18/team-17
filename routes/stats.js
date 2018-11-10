var express = require('express');
var router = express.Router();


router.get('/stats', function(req, res, next) {
  res.render('stats', { title: 'Express' });
});


exports.quiz = function(req, res){
  res.render('stats', { title: 'ejs' });};
  
    
module.exports = router;
