document.getElementById("addTask").addEventListener("click", () => {
    let task = document.getElementById("task").value;
    if (task) {
      let li = document.createElement("li");
      li.textContent = task;
      li.addEventListener("click", () => li.remove());
      document.getElementById("taskList").appendChild(li);
      document.getElementById("task").value = ""; // Clear input
    }
  });
  