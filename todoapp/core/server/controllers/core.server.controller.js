/**
 * Created by MrKK on 9/20/16.
 */

var service = require('../services/core.server.services');

module.exports.getSomething = function(req, res){
    console.log('KK');
    res
        .status(200)
        .send("Yayy");
}

module.exports.renderIndex = function(req, res){
    res.render('index');
}

module.exports.addTask = function(req, res){
    var task = req.body;
    service.addTask(task, function(err){
        if(err){
            res
                .status(400)
                .send("Error adding the task");
        }
        else {
            res
                .status(200)
                .send('Task successfully added.');
        }
    });
}

module.exports.markCompleted = function(req, res){
    var id = req.params.id;
    service.markCompleted(id, function(err){
        if(err){
            res
                .status(400)
                .send("Error updating the task");
        }
        else {
            res
                .status(200)
                .send('Task successfully updated.');
        }
    })
}

module.exports.getTasks = function(req, res){
    service.getTasks(function(data){
        if(!data){
            res
                .status(400)
                .send("Error getting the tasks");
        }
        else {
            res
                .status(200)
                .json(data);
        }
    })
}

module.exports.getCompleted = function(req, res) {
    service.getCompleted(function (data) {
        if (!data) {
            res
                .status(400)
                .send("Error getting the completed tasks");
        }
        else {
            res
                .status(200)
                .json(data);
        }
    })
}

module.exports.deleteTask = function(req, res){
    var id = req.params.id;
    service.deleteTask(id, function(err){
        if(err){
            res
                .status(400)
                .send("Error deleting the task");
        }
        else {
            res
                .status(200)
                .send('Task successfully deleted.');
        }
    })
}