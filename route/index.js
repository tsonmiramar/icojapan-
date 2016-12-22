var express = require('express');
var router = express.Router();
var helper = require("../helper");

//Setup request for searching students
router.post('/search_student', function(req,res,next){
    //retrieve the search input
    var input = { 
                  firstName: req.body.firstName || "",
                  lastName: req.body.lastName || "",
                  age: req.body.age || "",
                  school: req.body.school || ""
                } 
    
    //Call helper function to look up info in DB
    //Response back to client with JSON data
    var users = helper.findStudent(input);
    users.then(
            function(data){
                res.send(JSON.stringify(data));
                next();  
            },
            function(err){
                res.send(JSON.stringify({}));
                next();
            });
});

module.exports = router;