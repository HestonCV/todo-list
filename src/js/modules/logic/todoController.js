import Task from "./tasksModel";
import Project from "./projectModel";
import createProjectElement from "../ui/projectsView";
import createTaskElement from "../ui/taskView";
import taskManager from "./taskManager";
import projectManager from "./projectManager";

/* new TodoController */
class TodoController {
  constructor() {
    this.uiController = new UIController();
  }

  createTask(title, deadline, projectId) {
    // if projectId exists get project object
    if(projectId) {
      let project = null;
      project = projectManager.getProjectById(projectId);

      // check if project exists
      if(!project) {
        throw new Error("Project with given ID not found.")
      }
    }

    taskManager.addTask(title, deadline, projectId);
    this.uiController.updatePage();
  }

  removeTask(taskId) {
    taskManager.removeTask(taskId);
    this.uiController.updatePage();
    return;
  }

  createProject(title, color) {
    projectManager.addProject(title, color);
    this.uiController.updatePage();
    return;
  }
}


clas _TodoController {
  constructor() {
    this.tasks = [];
    this.projects = [];
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
