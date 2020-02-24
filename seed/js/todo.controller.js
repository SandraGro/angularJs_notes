function TodoController(){
    this.newTodo = '';
    this.list = [{
        title: '1 fadfad',
        completed: false
    }, {
        title: '2fasdfa',
        completed: false
    }, {
        title: '3fgfsf',
        completed: false
    }];
    this.addTodo = function () {
        this.list.unshift({
            title: this.newTodo,
            completed: false
        });
        this.newTodo = '';
    }
    this.removeTodo = function (item, index){
        this.list.splice(index, 1);
    }
    this.getRemaining =  function (){
        return this.list.filter(function(item){
            return !item.completed;
        });
    }
}

angular
    .module('app')
    .controller('TodoController', TodoController);