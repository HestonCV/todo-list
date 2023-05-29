import todoController from "./todoController";

class ProjectForm {
  constructor() {
    this.projectForm = document.querySelector(".project-form");
  }

  init() {
    this.projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("test form");
      const projectTitle = document.getElementById("projectTitle").value;
      const projectColor = document.getElementById("projectColor").value;

      // if project with same title exists, block creation and warn user
      const existingProject = todoController.projects.find(
        (project) => project.title === projectTitle
      );
      if (existingProject) {
        // TODO: add user warning
        console.log("project name already exists");
        return;
      }

      todoController.addProject(projectTitle, projectColor);
    });
  }
}

const projectForm = new ProjectForm();

export default projectForm;
