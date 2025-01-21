const todoInput = document.getElementById("todoInput");
const prioritySelect = document.getElementById("priority");
const dueDateInput = document.getElementById("dueDate");
const addTodoButton = document.getElementById("addTodo");
const todoList = document.getElementById("todoList");
const sortDueDate = document.getElementById("sortDueDate");
const sortPriority = document.getElementById("sortPriority");
const clearAllButton = document.getElementById("clearAll");

addTodoButton.addEventListener("click", function () {
  const todoText = todoInput.value.trim();
  const priority = prioritySelect.value;
  const dueDate = dueDateInput.value;

  if (todoText !== "" && dueDate !== "") {
    const listItem = document.createElement("li");

    if (priority === "1") listItem.classList.add("high-priority");
    else if (priority === "2") listItem.classList.add("medium-priority");
    else if (priority === "3") listItem.classList.add("low-priority");

    listItem.textContent = `${todoText} (Priority: ${priority}, Due: ${dueDate})`;
    listItem.dataset.priority = priority;
    listItem.dataset.dueDate = dueDate;

    listItem.addEventListener("click", function () {
      listItem.style.textDecoration = listItem.style.textDecoration === "line-through" ? "" : "line-through";
    });

    todoList.appendChild(listItem);

    todoInput.value = "";
    prioritySelect.value = "3";
    dueDateInput.value = "";
  }
});

sortDueDate.addEventListener("click", function () {
  const todos = Array.from(todoList.children);

  todos.sort((a, b) => new Date(a.dataset.dueDate) - new Date(b.dataset.dueDate));

  todoList.innerHTML = "";
  todos.forEach((todo) => todoList.appendChild(todo));
});

sortPriority.addEventListener("click", function () {
  const todos = Array.from(todoList.children);

  todos.sort((a, b) => a.dataset.priority - b.dataset.priority);

  todoList.innerHTML = "";
  todos.forEach((todo) => todoList.appendChild(todo));
});

clearAllButton.addEventListener("click", function () {
  todoList.innerHTML = "";
});
