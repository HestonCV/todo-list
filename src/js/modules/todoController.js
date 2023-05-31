import { v4 as uuidv4 } from "uuid";
import Task from "./tasksModel";
import Project from "./projectsModel";
import createProjectElement from "./projectsView";
import createTaskElement from "./tasksView";

class TodoController {
  constructor() {
    this.tasks = [];
    this.projects = [];
  }

  addTask(title, deadline, projectId) {
    // generate unique id for task
    const id = uuidv4();

    const newTask = new Task(title, deadline, projectId, id);
    this.tasks.push(newTask);

    // check if a project was selected, if it was, add task to project object
    if (projectId !== "0") {
      const projectMatch = this.projects.find(
        (project) => project.id === projectId
      );
      projectMatch.addTask(newTask);
    }
    console.log("test addtask");
    createTaskElement(newTask);
  }

  addProject(title, color) {
    // generate unique id for project
    const id = uuidv4();

    // create project
    const newProject = new Project(title, color, id);
    this.projects.push(newProject);

    // create project element
    createProjectElement(newProject);
    console.log("todoController addProject");
  }
}

const todoController = new TodoController();

export default todoController;
