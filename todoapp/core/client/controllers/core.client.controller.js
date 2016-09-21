/**
 * Created by MrKK on 9/20/16.
 */

angular.module('todo', ['ui.router'])
    .controller('todoCtrl', ['$scope', 'httpService', function($scope, httpService){
        httpService.getTasks()
            .success(function(data){
                $scope.tasks = data;
            })
            .error(function(err){
                console.log(err);
            })

        $scope.add = function(newTask){
            httpService.addTask(newTask)
                .success(function(data){
                    console.log("Task Successfully Added!");
                    $scope.newTask="";
                    httpService.getTasks()
                        .success(function(data){
                            console.log(data);
                            $scope.tasks = data;
                        })
                        .error(function(err){
                            console.log(err);
                        });
                })
                .error(function(err){
                    console.log("Couldn't add the task!");
                })
        }
        
        $scope.done = function(task){
            httpService.completed(task._id)
                .success(function(data){
                    console.log("Task successfully updated!");
                    httpService.getTasks()
                        .success(function(data){
                            console.log(data);
                            $scope.tasks = data;
                        })
                        .error(function(err){
                            console.log(err);
                        });
                })
                .error(function(err){
                    console.log("Error updating the Task!");
                })
        }

        $scope.delete = function(task){
            httpService.deleteTask(task._id)
                .success(function(data){
                    console.log("Task successfully deleted!");
                    httpService.getTasks()
                        .success(function(data){
                            console.log(data);
                            $scope.tasks = data;
                        })
                        .error(function(err){
                            console.log(err);
                        });
                })
                .error(function(err){
                    console.log("Error updating the Task!");
                })
        }
    }])

    .controller('compCtrl', ['$scope', 'httpService', function($scope, httpService){
        httpService.getCompleted()
            .success(function(data){
                $scope.completed = data;
            })
            .error(function(err){
                console.log(err);
            })

        $scope.delete = function(comp){
            httpService.deleteTask(comp._id)
                .success(function(data){
                    console.log("Task successfully deleted!");
                    httpService.getCompleted()
                        .success(function(data){
                            console.log(data);
                            $scope.completed = data;
                        })
                        .error(function(err){
                            console.log(err);
                        });
                })
                .error(function(err){
                    console.log("Error updating the Task!");
                })
        }
    }])

    .service('httpService', ['$http', function($http){
        this.getTasks = function(){
            return $http.get('/getTasks');
        }
        this.addTask = function(newTask){
            var task = {task: newTask}
            return $http.post('/addTask', task);
        }
        this.completed = function(id){
            return $http.get('/updateTask/'+id);
        }
        this.getCompleted = function(){
            return $http.get('/getCompleted');
        }
        this.deleteTask = function(id){
            return $http.delete('/deleteTask/'+id);
        }
    }])