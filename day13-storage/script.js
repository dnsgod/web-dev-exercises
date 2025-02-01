const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    const task = taskInput.value.trim();
    if (task ==="") return;

    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">삭제</button>`;
    taskList.appendChild(li);

    saveTask(task);

    taskInput.value = "";
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(task));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `${task} <button class="delete" onclick="deleteTask(this)">삭제</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(button) {
    const li = button.parentElement;
    const task = li.firstChild.textContent.trim();
    li.remove();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}