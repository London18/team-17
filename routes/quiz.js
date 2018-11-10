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

const TEST_USER_ID = 1;
const START_DATE = new Date("11/09/2018");
const NUMBER_QUESTIONS = 21;


/* GET home page. */
router.get('/status', function(req, res, next) {

    query = "SELECT COUNT(*) AS count FROM Response WHERE 'user_id' = " + TEST_USER_ID + " AND 'week' = " + get_current_week() + ";";

    con.query(query, function (err, result, fields) {
        if (err) throw err;

        // Find the number of questions left
        questionsLeft = NUMBER_QUESTIONS - result[0].count;

        surveyComplete = true;
        daysUntilEnd = null;

        if (questionsLeft > 0) {

            surveyComplete = false;
            daysUntilEnd = get_days_until_end();
        }

        res.send([surveyComplete, daysUntilEnd]);
    });
});

function get_days_until_end () {

    var currentDate = new Date();

    // time difference
    var timeDiff = Math.abs(currentDate.getTime() - START_DATE.getTime());
    // days difference
    var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    return 7 - (diffDays % 7);
}

function get_current_week () {

    var currentDate = new Date();

    // time difference
    var timeDiff = Math.abs(currentDate.getTime() - START_DATE.getTime());
    // days difference
    var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));

    var week = Math.floor(diffDays / 7) + 1;

    return week;
}


module.exports = router;