var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "autistica"
});

con.connect(function(err) {
    if (err) throw err;
});

con.on('error', function(err) {
    console.log("[mysql error]",err);
});

const TEST_USER_ID = 1;
const START_DATE = new Date("11/09/2018");
const NUMBER_QUESTIONS = 21;


/* GET home page. */
router.get('/xp', function(req, res, next) {

    query = "SELECT COUNT(*) * 10 AS count FROM Response WHERE user_id = " + TEST_USER_ID + ";";

    con.query(query, function (err, result, fields) {
        if (err) throw err;

        res.end(result[0].count.toString());
    });
});


module.exports = router;