import taskProjectManager from "../logic/taskProjectManager";
import applicationController from "../logic/applicationController";

class ProjectModal {
  constructor() {
    this.projectForm = document.getElementById("project-form");
  }

  init() {
    console.log("testing1");
    this.projectForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const projectTitle = document.getElementById("project-title").value;
      const projectColor = document.getElementById("project-color").value;

      // if project with same title exists, block creation and warn user
      const existingProject = taskProjectManager.projectManager.projects.find(
        (project) => project.title === projectTitle
      );

      if (existingProject) {
        // TODO: add user warning
        console.log("project name already exists");
        return;
      }
      console.log("testing2");

      taskProjectManager.addProject(projectTitle, projectColor);
      applicationController.updatePage();
      console.log("testing3");
      this.projectForm.reset();
      this.toggleForm();
    });
  }

  toggleForm() {
    // TODO:
  }
}

const projectModal = new ProjectModal();

export default projectModal;
