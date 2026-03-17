let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const priority = document.getElementById("priority");

    if (!input || input.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasks.push({
        text: input.value,
        priority: priority.value,
        done: false
    });

    saveTasks();   // ✅ ADD THIS
    input.value = "";
    renderTasks();
}

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

                <span class="priority ${task.priority}">
                    ${task.priority}
                </span>

                <button class="delete-btn" onclick="deleteTask(${index})">
                    X
                </button>
            `;

            list.appendChild(li);
        });
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    saveTasks();   // ✅ ADD THIS
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();   // ✅ ADD THIS
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    renderTasks();
}

renderTasks();