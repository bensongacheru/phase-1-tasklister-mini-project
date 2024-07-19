document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Get the task description input field value
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;
  
      // Create a new task item
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
  
      // Append the task to the list
      taskList.appendChild(taskItem);
  
      // Clear the input field
      taskInput.value = "";
    });
  });
  