import Project from "./projectModel";
import generateUUID from "./uuid";
import createProjectElement from "../ui/projectView";

class ProjectManager {
  constructor() {
    this.projects = [];
  }

  addProject(title, color) {
    const id = generateUUID();
    const newProject = new Project(title, color, id);
    createProjectElement(newProject);
    this.projects.push(newProject);
  }

  removeProject(projectId) {
    // remove project with matching id
    for (let i = 0; i < this.projects.length; i += 1) {
      if (this.projects[i].id === projectId) {
        Array.splice(i, 1);
      }
    }
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

export default ProjectManager;
