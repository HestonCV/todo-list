import { v4 as uuidv4 } from "uuid";
import Task from "./tasksModel";

class TasksController {
  constructor() {
    this.tasks = [];
  }

  addTask(title, project) {
    const id = uuidv4();
    const newTask = new Task(title, project, id);
    this.tasks.push(newTask);
  }
}
