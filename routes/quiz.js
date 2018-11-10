var express = require('express');
var router = express.Router();


router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Express' });
});


exports.quiz = function(req, res){
  res.render('quiz', { title: 'ejs' });};
  
    
module.exports = router;
