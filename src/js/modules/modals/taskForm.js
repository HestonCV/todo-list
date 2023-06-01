import { createElement } from "../ui/createElement";
import todoController from "../logic/todoController";

class TaskForm {
  constructor() {
    this.taskForm = document.querySelector(".task-form");
    this.projectSelect = document.getElementById("task-project");
  }

  init() {
    this.taskForm = document.querySelector(".task-form");
    this.projectSelect = document.getElementById("task-project");

    this.taskForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const taskTitle = document.getElementById("task-title").value;
      const taskDeadline = document.getElementById("task-deadline").value;
      const taskProject = document.getElementById("task-project").value;
      console.log(taskDeadline);
      todoController.addTask(taskTitle, taskDeadline, taskProject);
      this.taskForm.reset();
      this.toggleForm();
    });
  }

  populateProjectDropdown() {
    // clear select dropdown
    while (this.projectSelect.firstChild) {
      this.projectSelect.removeChild(this.projectSelect.firstChild);
    }

    // add None option
    const noneOption = createElement({
      element: "option",
      textContent: "None",
      parent: this.projectSelect,
    });
    noneOption.value = "0";

    // create an option for each unique project
    for (let i = 0; i < todoController.projects.length; i += 1) {
      const option = createElement({
        element: "option",
        textContent: todoController.projects[i].title,
        parent: this.projectSelect,
      });
      option.value = todoController.projects[i].id;
    }
    console.log("populateProjectDropdown");
  }

  toggleForm() {
    this.taskForm.style.display =
      this.taskForm.style.display === "flex" ? "none" : "flex";
  }
}

const taskForm = new TaskForm();

export default taskForm;
