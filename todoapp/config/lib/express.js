/**
 * Created by MrKK on 9/20/16.
 */
var express = require('express'),
    bodyParser = require('body-parser'),
    consolidate = require('consolidate'),
    path = require('path'),
    swig = require('swig');

module.exports.init = function(){

    var app = express();
    this.initBodyParser(app);
    this.initViewEngine(app);
    this.ignoreStatic(app);

    return app;
}

module.exports.initBodyParser = function(app){
    app.use(bodyParser.urlencoded({ extended: false }));
    // parse application/json
    app.use(bodyParser.json());

    //app.use(session({secret: 'ssshhhhh'}));
}

module.exports.initViewEngine = function(app){

    app.engine('server.view.html', consolidate['swig']);
    app.set('view engine', 'server.view.html');
    app.set('views', path.join(process.cwd(), 'core/server/views'));
}

module.exports.ignoreStatic = function(app) {

    app.use('/public', express.static(path.resolve('./public')));
    app.use('/core/client', express.static(path.resolve('./core/client')));



}