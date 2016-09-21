/**
 * Created by MrKK on 9/20/16.
 */

var express = require('./express'),
    path = require('path'),
    mongoose = require('./mongoose');


module.exports.loadRoutes = function(app){
    var coreRoutes = require(path.join(process.cwd(), 'core/server/routes/core.server.routes'));
    coreRoutes(app);
}

module.exports.start = function(){

    var self = this;

    mongoose.connect(function(db){

        var app = express.init();
        self.loadRoutes(app);
        app.listen('8060', function(){
            console.log("App is running on port 8060.");
        })

    });

}