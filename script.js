let tasks = [];
let currentFilter = "all";

function addTask() {
    const input = document.getElementById("taskInput");
    const priority = document.getElementById("priority").value;

    if (input.value.trim() === "") {
        alert("Task cannot be empty!");
        return;
    }

    tasks.push({
        text: input.value,
        priority: priority,
        done: false
    });

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
        <span onclick="toggleDone(${index})">${task.text}</span>
        <span class="priority ${task.priority}">${task.priority}</span>
        <button class="delete-btn" onclick="deleteTask(${index})">X</button>
      `;

            list.appendChild(li);
        });
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(filter) {
    currentFilter = filter;
    renderTasks();
}