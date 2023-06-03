import Task from "./tasksModel";
import generateUUID from "./uuid";

class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, deadline, projectId) {
    const id = generateUUID();
    const newTask = new Task(title, deadline, projectId, id);
    this.tasks.push(newTask);
    return newTask();
  }

  removeTask(taskId) {
    for (let i = 0; i < this.tasks.length; i += 1) {
      if (this.tasks[i].id === taskId) {
        Array.splice(i, 1);
      }
    }
    // TODO: update UI
  }

  getTasksSortedByDate() {
    return this.tasks; // TODO: sort tasks by date.
  }
}

export default TaskManager;
