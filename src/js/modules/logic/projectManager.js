import Project from "./projectModel";
import generateUUID from "./uuid";

class ProjectManager {
  constructor() {
    this.projects = [];
  }

  addProject(title, color) {
    const id = generateUUID();
    const newProject = new Project(title, color, id);
    this.projects.push(newProject);
  }

  addTaskToProject(task) {
    if (task.projectId) {
      const projectMatch = this.projects.find(
        (project) => project.id === task.projectId
      );
      projectMatch.addTask(task);
    }
  }

  getProjectById(projectId) {
    return this.projects.find((project) => project.id === projectId);
  }
}

const projectManager = new ProjectManager();
export default projectManager;
