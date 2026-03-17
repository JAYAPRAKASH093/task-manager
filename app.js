function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const btn = document.createElement("button");
    btn.textContent = "✕";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}