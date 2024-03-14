const checklist = document.getElementById('checklist');
const newItemForm = document.getElementById('new-item-form');
const newItemInput = document.getElementById('new-item-input');
const checkedCount = document.getElementById('checked-count');

// Load items from local storage
let items = JSON.parse(localStorage.getItem('items')) || [];

// Render items
function renderItems() {
  checklist.innerHTML = '';
  let checkedItemsCount = 0;
  items.forEach(item => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = item.checked;
    input.addEventListener('change', () => {
      item.checked = input.checked;
      localStorage.setItem('items', JSON.stringify(items));
      checkedCount.textContent = ++checkedItemsCount;
    });
    li.appendChild(input);
    li.appendChild(document.createTextNode(item.name));
    checklist.appendChild(li);
  });
}

// Add new item
newItemForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (newItemInput.value.trim()) {
    const item = { name: newItemInput.value.trim(), checked: false };
    items.push
