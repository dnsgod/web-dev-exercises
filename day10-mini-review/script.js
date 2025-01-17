const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', addTask);

function addTask() {
    const task = todoInput.value.trim();

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <span>${task}</span>
    <button class="delete-btn">Delete</button>
    `;

    listItem.addEventListener('click', function () {
        this.classList.toggle('completed');
    });

    listItem.querySelector('.delete-btn').addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent triggering 'completed' toggle
        listItem.remove();
      });
    
      todoList.appendChild(listItem);
      todoInput.value = '';
    
}