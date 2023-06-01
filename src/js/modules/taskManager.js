import Task from "./tasksModel";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, deadline, projectId, id) {
    const newTask = new Task(title, deadline, projectId, id);
    this.tasks.push(newTask);
  }

  removeTask(taskId) {}
}
