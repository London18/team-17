var express = require('express');
var router = express.Router();


router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Express' });
});


exports.quiz = function(req, res){
  res.render('settings', { title: 'ejs' });};
  
    
module.exports = router;
