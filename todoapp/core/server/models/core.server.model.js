/**
 * Created by MrKK on 9/20/16.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    validator = require('validator');


var validateFieldStrategy = function(property){

    return property.length;
}

var todoSchema = new Schema({
   task: {
       type: String,
       validate: [validateFieldStrategy, "Text cannot be empty"]
   },
    completed: {
        type: Boolean,
        default: false
    }
});

mongoose.model('todo', todoSchema);