const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo")

todoButton.addEventListener("click" , addTodo );
todoList.addEventListener("click" ,deleteComplete);
filterOption.addEventListener("click" , filterTodo);

function addTodo (event) {
    event.preventDefault();
    console.log("hello") 

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
      newTodo.innerText = todoInput.value;
      newTodo.classList.add("todo-item");
      todoDiv.appendChild(newTodo);

      //Check mark button
     
     const completeButton = document.createElement("button");
     completeButton.innerHTML = '<li class="fas fa-check"></li>'
     completeButton.classList.add  ("complete-btn");
     
     todoDiv.appendChild(completeButton);

     // remove

     
     const deleteButton = document.createElement("button");
     deleteButton.innerHTML = '<li class="fas fa-trash"></li>'
     deleteButton.classList.add("delete-btn");
     
     todoDiv.appendChild(deleteButton);

todoList.appendChild(todoDiv)
todoInput.value = ""

}

function deleteComplete (event) {
    const item = event.target;
    console.log(item)
    
     if(item.classList[0] === "delete-btn") {
         const todo = item.parentElement;
         todo.classList.add("fall");

         todo.addEventListener("transitionend" , function () {
             todo.remove();
         })

     }
     if(item.classList[0] === "complete-btn") {

        const todo = item.parentElement;
        todo.classList.toggle("completed")
     }
}


function filterTodo (e) {
 const todos = todoList.childNodes;
 console.log(todos)
 
//  todos.forEach(function(todo) {

//     switch(e.target.value){
//         case "all" :
//             todo.style.display = "flex";
//             break;
//          case "completed" : 
//          if(todo.classList.contains("completed")) {
//              todo.style.display = "flex";
//          } else {
//              todo.style.display = "none";
//          }
    

//     }
//  });

}