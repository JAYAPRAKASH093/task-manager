function addTaskLogic(tasks, text, priority) {
    if (!text.trim()) {
        throw new Error("Task cannot be empty");
    }

    return [...tasks, { text, priority, done: false }];
}

function toggleTaskLogic(tasks, index) {
    return tasks.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
    );
}

function deleteTaskLogic(tasks, index) {
    return tasks.filter((_, i) => i !== index);
}

module.exports = {
    addTaskLogic,
    toggleTaskLogic,
    deleteTaskLogic
};