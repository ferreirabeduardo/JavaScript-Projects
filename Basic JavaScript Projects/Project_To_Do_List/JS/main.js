//this function gets the tasks from browser storage
function get_todos() {
  //an array to hold the tasks
  var todos = new Array();
  //pull the tasks that were saved in the browser memory
  var todos_str = localStorage.getItem('todo');
  //if it is not empty, turn the string back into a javascript object
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

//this function adds the typed task to the array
function add() {
  //get the typed task
  var task = document.getElementById('task').value;
  var todos = get_todos();
  //add the new task to the end of the array
  todos.push(task);
  //save the array back to the browser as a JSON string
  localStorage.setItem('todo', JSON.stringify(todos));
  //clear the input box
  document.getElementById('task').value = "";
  show();
  return false;
}

//this function removes a task from the array
function remove() {
  //get the id of the button that was clicked
  var id = this.getAttribute('id');
  var todos = get_todos();
  //remove that one task from the array
  todos.splice(id, 1);
  //save the updated array back to the browser
  localStorage.setItem('todo', JSON.stringify(todos));
  show();
  return false;
}

//this function shows the tasks on the screen
function show() {
  var todos = get_todos();
  var html = '<ul>';
  //add each task as a list item with an x button to remove it
  for (var i = 0; i < todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
  }
  html += '</ul>';
  //display the list
  document.getElementById('todos').innerHTML = html;

  //attach a click to each x button so it can remove its task
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  }
}

//show the tasks when the button is clicked
document.getElementById('add').addEventListener('click', add);

//keep the tasks displayed when the page loads
show();
