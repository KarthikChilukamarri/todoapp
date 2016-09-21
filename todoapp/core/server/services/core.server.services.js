/**
 * Created by MrKK on 9/20/16.
 */

var mongoose = require('mongoose'),
    todo = mongoose.model('todo');

module.exports.addTask = function(task, callback){
    
    var task = new todo(task);
    task.save(function(err){
        if(err) callback(err);
        else callback(null);
    });
}

module.exports.markCompleted = function(id, callback){
    todo.findOne({_id: id}, function(err, data){
        if(!data){
            console.log("Couldn't find the task."+err);
            callback(true);
        }
        else {
            var updatedTask = {
                _id: id,
                task: data.task,
                completed: true
            }
            todo.findByIdAndUpdate(id, updatedTask, function(err){
                if(err){
                    console.log("Couldn't mark the task completed."+err);
                    callback(err);
                }
                else {
                    callback(null);
                }
            })
        }
    })
}

module.exports.getTasks = function(callback){

    console.log("Inside service");
    todo.find({"completed":false}, function(err, data){
        if(!data){
            console.log("Couldn't get the tasks."+err);
            callback(true);
        }
        else {
            callback(data);
        }
    })

}

module.exports.getCompleted = function(callback){

    todo.find({"completed":true}, function(err, data){
        if(!data){
            console.log("Couldn't get the tasks."+err);
            callback(true);
        }
        else {
            callback(data);
        }
    })
}

module.exports.deleteTask = function(id, callback){
    todo.findByIdAndRemove({'_id':id}, function(err){
        if(err){
            console.log("Error deleting the task!");
            callback(err);
        }
        else callback(null);
    })
}

module.exports.updateTask = function(updTask, id, callback){

    todo.findOne({_id: id}, function(err, data){
        if(!data){
            console.log("Couldn't find the task."+err);
            callback(true);
        }
        else {
            var updatedTask = {
                _id: id,
                task: updTask,
                completed: data.completed
            }
            todo.findByIdAndUpdate(id, updatedTask, function(err){
                if(err){
                    console.log("Couldn't update the task."+err);
                    callback(err);
                }
                else {
                    callback(null);
                }
            })
        }
    })
}