const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = document.createElement('li');
  task.textContent = input.value;
  list.appendChild(task);
  input.value = '';
});
