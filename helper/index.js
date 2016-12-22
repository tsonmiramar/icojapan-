'use strict';

var db = require('../db');

//find student by given properties
var findStudent = function(input) {
    var condition = {};
    for (var field in input) {
        if (input[field] !== "")
            condition[field] = input[field]; 
    }
   
    return new Promise(function(resolve,reject){
        db.StudentModel.find(condition).lean().exec(function(err,result){
            if (err){
                reject(err);
            }
            else 
            {
                resolve(result);
            }
        });
    });
};

module.exports = {
    findStudent
}