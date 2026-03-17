const {
    addTaskLogic,
    toggleTaskLogic,
    deleteTaskLogic
} = require('./taskLogic');

test("addTask: should add a task", () => {
    const result = addTaskLogic([], "Learn DevOps", "high");

    expect(result.length).toBe(1);
    expect(result[0].text).toBe("Learn DevOps");
});

test("addTask: should throw error for empty task", () => {
    expect(() => addTaskLogic([], "", "low")).toThrow();
});

test("toggleTask: should mark task as done", () => {
    const tasks = [{ text: "Test", done: false }];
    const result = toggleTaskLogic(tasks, 0);

    expect(result[0].done).toBe(true);
});

test("deleteTask: should remove task", () => {
    const tasks = [{ text: "A" }, { text: "B" }];
    const result = deleteTaskLogic(tasks, 0);

    expect(result.length).toBe(1);
});