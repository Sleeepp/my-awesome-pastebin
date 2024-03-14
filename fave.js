const checklist = document.getElementById('checklist');
const completedTasks = document.getElementById('completed-tasks');

// Load tasks from local storage
const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
for (const task of savedTasks) {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = task${task.id};
  checkbox.checked = task.completed;
  li.appendChild(checkbox);
  const label = document.createElement('label');
  label.htmlFor = task${task.id};
  label.textContent = task.text;
  li.appendChild(label);
  checklist.appendChild(li);
}

// Update completed tasks count
let completedCount = 0;
for (const task of savedTasks) {
  if (task.completed) {
    completedCount++;
  }
}
completedTasks.textContent = completedCount;

// Add event listener to checkboxes
checklist.addEventListener('change', (event) => {
  const checkbox = event.target;
  if (checkbox.checked) {
    completedCount++;
  } else {
    completedCount--;
  }
  completedTasks.textContent = completedCount;

  // Save task to local storage
  const taskId = parseInt(checkbox.id.slice(5));
  const taskIndex = savedTasks.findIndex((task) => task.id === taskId);
  if (taskIndex !== -1) {
    savedTasks[taskIndex].completed = checkbox.checked;
  } else {
    savedTasks.push({ id: taskId, text
