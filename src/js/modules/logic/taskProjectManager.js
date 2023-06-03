import TaskManager from "./taskManager";
import ProjectManager from "./projectManager";

class TaskProjectManager {
  constructor() {
    this.projectManager = new ProjectManager();
    this.taskManager = new TaskManager();
  }

  addTask(title, deadline, projectId) {
    // error check - if id is provided check if it exists
    if (projectId) {
      let project = null;
      project = this.projectManager.getProjectById(projectId);

      // check if project exists
      if (!project) {
        throw new Error("Project with given ID not found.");
      }
    }

    const newTask = this.taskManager.addTask(title, deadline, projectId);
    this.projectManager.addTaskToProject(newTask);
  }

  removeTask(taskId) {
    this.taskManager.removeTask(taskId);
  }

  addProject(title, color) {
    this.projectManager.addProject(title, color);
  }

  removeProject(projectId) {
    this.projectManager.removeProject(projectId);
  }
}

const taskProjectManager = new TaskProjectManager();

export default taskProjectManager;
