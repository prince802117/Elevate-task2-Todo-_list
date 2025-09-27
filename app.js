const addBtn = document.getElementById('add-task-btn');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

function addTask() {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.className = 'task-item';
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="remove-btn">&times;</button>
  `;

  // Mark complete toggle
  li.querySelector('span').addEventListener('click', function(){
    li.classList.toggle('completed');
  });

  // Remove task
  li.querySelector('.remove-btn').addEventListener('click', function(){
    list.removeChild(li);
  });

  list.appendChild(li);
  input.value = '';
  input.focus();
}

// Add via button
addBtn.addEventListener('click', addTask);

// Add via enter key
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});
