/**
 * Created by MrKK on 9/20/16.
 */

angular
    .module('todo')
    .config(function($stateProvider){
        $stateProvider
            .state('todoList', {
                url: '/todoList',
                templateUrl: 'core/client/views/todo.client.tpl.html'
            })
            .state('completed', {
                url: '/completedTasks',
                templateUrl: 'core/client/views/completed.client.tpl.html'
            });
    });