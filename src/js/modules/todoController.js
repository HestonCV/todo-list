import { v4 as uuidv4 } from "uuid";
import Task from "./tasksModel";
import Project from "./projectsModel";
import createProjectElement from "./projectsView";

class TodoController {
  constructor() {
    this.tasks = [];
    this.projects = [];
  }

  addTask(title, projectId) {
    const id = uuidv4();
    /*  const project
    const newTask = new Task(title, projectId, id);
 */

    /*  this.tasks.push(newTask); */
  }

  addProject(title, color) {
    const id = uuidv4();
    const newProject = new Project(title, color, id);
    this.projects.push(newProject);
    createProjectElement(newProject);
  }
}

export default TodoController;
