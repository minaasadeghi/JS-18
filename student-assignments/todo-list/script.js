function populateTodoList(todos) {
  let list = document.getElementById('todo-list');
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  list.innerHTML = '';
}

todos.forEach((todo, index) => {
  let todoItem = document.createElement('li');
  todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
  todoItem.textContent = todo.task;

  let badge = document.createElement('span');
  badge.classList.add('badge', 'bg-primary', 'rounded-pill');

  let checkBtn = document.createElement('i');
  checkBtn.classList.add('fa', 'fa-check');
  checkBtn.setAttribute('aria-hidden', 'true');
  checkBtn.addEventListener('click', function() {
    todoItem.style.textDecoration = todo.completed ? 'none' : 'line-through';
    todo.completed = !todo.completed;
  });
  let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa', 'fa-trash');
    deleteBtn.setAttribute('aria-hidden', 'true');
    deleteBtn.addEventListener('click', function() {
      todos.splice(index, 1);
      populateTodoList(todos);
    });
    badge.appendChild(checkBtn);
    badge.appendChild(deleteBtn);
    todoItem.appendChild(badge);
    list.appendChild(todoItem);
  });




// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: 'Wash the dishes', completed: false },
  { task: 'Do the shopping', completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let input = document.getElementById('todoInput');
  let newTodo = input.value.trim();
  
  if (newTodo) {
    todos.push({ task: newTodo, completed: false });
    input.value = '';
    populateTodoList(todos);
  }
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
