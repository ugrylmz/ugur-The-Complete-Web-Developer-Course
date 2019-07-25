
var todos = [
    "clean room",
    "brush teet",
    "exercise",
    "study javascript",
    "eat healthy",
  ]
  
  var todosImportant = [
    "brush teet!*",
    "clean room!*",
    "exercise!*",
    "study javascript!*",
    "eat healthy!*",
  ]
  todos.forEach(function(todo){
    console.log(todo);
  })  
  
  function logTodos(todo,i){
    console.log(todo,i);
  }
    
  todos.forEach(logTodos);
  todosImportant.forEach(logTodos);
  