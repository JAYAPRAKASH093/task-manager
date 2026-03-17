function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks
        .filter(task => {
            if (currentFilter === "done") return task.done;
            if (currentFilter === "todo") return !task.done;
            return true;
        })
        .forEach((task, index) => {
            const li = document.createElement("li");

            li.className = task.done ? "done" : "";

            li.innerHTML = `
        <div class="left-section">
          <input type="checkbox" ${task.done ? "checked" : ""} 
            onchange="toggleDone(${index})" />

          <span class="task-text">${task.text}</span>
        </div>

        <span class="priority ${task.priority}">${task.priority}</span>

        <button class="delete-btn" onclick="deleteTask(${index})">X</button>
      `;

            list.appendChild(li);
        });
}