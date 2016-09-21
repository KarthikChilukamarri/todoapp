/**
 * Created by MrKK on 9/20/16.
 */
var mongoose = require('mongoose'),
    path = require('path'),
    tasks = require(path.join(process.cwd(), 'core/server/models/core.server.model'));


module.exports.connect = function(callback){
    var db = mongoose.connect('mongodb://localhost:27017/KKDB', {user: '', pass: ''}, function(err){
        if(err){
            console.error("ERROR: Couldn't connect to the Mongodb!!");
            console.log(err);
        } else{
            if(callback) callback(db);
        }
    });
}