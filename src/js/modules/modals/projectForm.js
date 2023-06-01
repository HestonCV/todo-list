import todoController from "../logic/todoController";

class ProjectForm {
  constructor() {
    this.projectForm = document.querySelector(".project-form");
  }

  init() {
    this.projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const projectTitle = document.getElementById("project-title").value;
      const projectColor = document.getElementById("project-color").value;

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
      this.projectForm.reset();
      this.toggleForm();
    });
  }

  toggleForm() {
    this.projectForm.style.display =
      this.projectForm.style.display === "flex" ? "none" : "flex";
  }
}

const projectForm = new ProjectForm();

export default projectForm;
