import generateUUID from "./uuid";
import Task from "./tasksModel";
import Project from "./projectsModel";
import createProjectElement from "./projectsView";
import createTaskElement from "./tasksView";

/* new TodoController */
class TodoController {
  constructor() {
    this.taskManager = new TaskManager();
    this.projectManager = new ProjectManager();
  }

  createTask(title, deadline, projectId) {
    const id = generateUUID();
    let project = null;

    // if projectId exists get project object
    if(projectId) {
      project = projectManager.getProjectById(projectId);

      // check if project exists
      if(!project) {
        throw new Error("Project with given ID not found.")
      }
    } 

    this.taskManager.addTask(title, deadline, project, id);
    // TODO: update UI
    return;
  }

  removeTask(taskId) {
    this.taskManager.removeTask(taskId);
    // TODO: update UI
    return;
  }

  createProject(title, color) {
    const id = generateUUID();
    this.projectManager.addProject(title, color, id);
    // TODO: update UI
    return;
  }
}


clas _TodoController {
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

const todoController = new _TodoController();

export default todoController;
