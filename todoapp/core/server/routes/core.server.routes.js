/**
 * Created by MrKK on 9/20/16.
 */
var controller = require('../controllers/core.server.controller');

module.exports = function(app){
   
    app.route('/')
        .get(controller.renderIndex);

    app.route('/addTask')
        .post(controller.addTask);
    
    app.route('/updateTask/:id')
        .get(controller.markCompleted);
    
    app.route('/getTasks')
        .get(controller.getTasks);
    
    app.route('/getCompleted')
        .get(controller.getCompleted);

    app.route('/deleteTask/:id')
        .delete(controller.deleteTask);
}